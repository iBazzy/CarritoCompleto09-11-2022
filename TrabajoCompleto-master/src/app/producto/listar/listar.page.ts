import { Component, OnInit, ViewChild } from '@angular/core';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { Router } from '@angular/router';

import { idProducto } from '../modelo/productos';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public producto: Array<idProducto>=[];
  constructor(private notebookApi:TiendaService,private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.notebookApi.obternerTodo()
    this.notebookApi.listaProductos$.subscribe(datosActuales =>
      {
      this.producto=datosActuales;
      if(this.scroll){
        this.scroll.complete();
      }
    })
  }

}
