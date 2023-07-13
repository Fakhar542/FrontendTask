import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 baseUrl="/assets/property.json"


  constructor(private http: HttpClient) {

 }

getProperty(){
  return this.http.get(this.baseUrl);
  
  }
}
