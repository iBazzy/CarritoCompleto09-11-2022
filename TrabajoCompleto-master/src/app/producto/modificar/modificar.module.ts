import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPageRoutingModule } from './modificar-routing.module';

import { ModificarPage } from './modificar.page';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModificarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ModificarPage],
  providers:[TiendaService]
})
export class ModificarPageModule {}
