import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import { TiendaService } from 'src/app/servicio/tienda.service';

@NgModule({
  imports: [
    CommonModule,

    IonicModule,
    DetallePageRoutingModule,
    HttpClientModule
  ],
  declarations: [DetallePage],
  providers:[TiendaService]
})
export class DetallePageModule {}
