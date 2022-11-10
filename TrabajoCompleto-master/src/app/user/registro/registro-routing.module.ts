import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaService } from 'src/app/servicio/tienda.service';

import { RegistroPage } from './registro.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[TiendaService]
})
export class RegistroPageRoutingModule {}
