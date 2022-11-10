import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { EliminarPageRoutingModule } from './eliminar-routing.module';

import { EliminarPage } from './eliminar.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TiendaService } from 'src/app/servicio/tienda.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EliminarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EliminarPage],
  providers:[TiendaService]
})
export class EliminarPageModule {}
