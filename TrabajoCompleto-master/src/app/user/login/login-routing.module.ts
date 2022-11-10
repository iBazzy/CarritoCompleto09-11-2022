import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaService } from 'src/app/servicio/tienda.service';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[TiendaService]
})
export class LoginPageRoutingModule {}
