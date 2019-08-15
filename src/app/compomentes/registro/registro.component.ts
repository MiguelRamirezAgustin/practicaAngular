import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public servicios:MyserviceService) { }

  RestApi;
  
  ngOnInit() {
    this.userGet();
  }


  userGet(){
    this.servicios.getUser().subscribe(data=>{
      console.log('Res--- ok', data)
      this.RestApi = data;
    }, error =>{
      console.log('eror', error)
      
    })
    console.log('usuarios....');

  }


  seleccionar(e){
    alert(e);
console.log(e);
  }
}
