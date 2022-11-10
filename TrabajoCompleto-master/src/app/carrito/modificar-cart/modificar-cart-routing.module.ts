import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarCartPage } from './modificar-cart.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarCartPageRoutingModule {}
