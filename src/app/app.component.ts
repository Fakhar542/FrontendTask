import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from './view/detail/detail.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Your App';
  search: string = '';
  user:any;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['action', 'position', 'Imageurl', 'title', 'address', 'beds', 'bath', 'coveredAreaSQFT', 'propertyType', 'isCommercial', 'price'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: HeroService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty() {
    this.api.getProperty().subscribe((data) => {
      this.user=data;
      this.dataSource = new MatTableDataSource(this.user);
     this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  movieDetails(element: any) {
    const dialogRef = this.dialog.open(DetailComponent, {
      data: { id:element },
      width: '500px',
      height: '300px',
    });
  }
}
