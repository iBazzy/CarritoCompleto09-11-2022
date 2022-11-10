import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TiendaService } from '../../servicio/tienda.service';
import { AgregarPageRoutingModule } from './agregar-routing.module';

import { AgregarPage } from './agregar.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgregarPageRoutingModule
  ],
  declarations: [AgregarPage],
  providers:[TiendaService ]
})
export class AgregarPageModule {}
