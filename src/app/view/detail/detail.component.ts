import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  data: any;
  
  constructor(private _route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) data:any, private api:HeroService )  {
this.data=data;
 }

  ngOnInit(): void {
    
  }
  

}
