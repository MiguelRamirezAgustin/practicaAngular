import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './compomentes/login/login.component';
import { RegistroComponent } from './compomentes/registro/registro.component';

const routes: Routes = [
  {path: 'loginn', component : LoginComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
