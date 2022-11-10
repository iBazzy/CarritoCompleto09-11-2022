import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { CarritoDeCompraPageRoutingModule } from './carrito-de-compra-routing.module';

import { CarritoDeCompraPage } from './carrito-de-compra.page';
import { HttpClientModule } from '@angular/common/http';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    CarritoDeCompraPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CarritoDeCompraPage],
  providers:[TiendaService]
})
export class CarritoDeCompraPageModule {}
