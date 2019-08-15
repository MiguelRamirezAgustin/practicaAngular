import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public http:HttpClient ) { }


  
  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  //https://jsonplaceholder.typicode.com/users
}
