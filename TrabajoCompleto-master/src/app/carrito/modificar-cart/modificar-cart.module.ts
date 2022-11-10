import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarCartPageRoutingModule } from './modificar-cart-routing.module';

import { ModificarCartPage } from './modificar-cart.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModificarCartPageRoutingModule
  ],
  declarations: [ModificarCartPage]
})
export class ModificarCartPageModule {}
