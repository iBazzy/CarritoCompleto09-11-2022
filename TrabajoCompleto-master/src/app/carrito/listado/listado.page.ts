import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { idProducto, Productos } from 'src/app/producto/modelo/productos';
import { idUsuario } from 'src/app/producto/modelo/user';
import { TiendaService } from 'src/app/servicio/tienda.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  cart :Productos []=[];
  products:[];
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public producto: Array<idProducto> = [];
  constructor(private notebookApi: TiendaService) { }

  ngOnInit() {


  }
  ionViewWillEnter() {
    this.notebookApi.obternerTodo()
    this.notebookApi.listaProductos$.subscribe(datosActuales => {
      this.producto = datosActuales;
      if (this.scroll) {
        this.scroll.complete();
      }
    })

  }
  public obtenerMasNote(){
    this.notebookApi.obternerTodo();
  }


  }
