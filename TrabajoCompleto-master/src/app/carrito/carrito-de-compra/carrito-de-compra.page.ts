import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { idProducto, NotebookModificar, Productos } from 'src/app/producto/modelo/productos';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { FormBuilder, FormGroup,Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrito-de-compra',
  templateUrl: './carrito-de-compra.page.html',
  styleUrls: ['./carrito-de-compra.page.scss'],
})
export class CarritoDeCompraPage implements OnInit {

  cart: any;

  constructor(private notebookApi:TiendaService, private router: Router,
    private builder : FormBuilder ,private rutaActiva: ActivatedRoute) {


  }
  ngOnInit(){

    this.notebookApi.listarProductos().subscribe(res=>{
      this.cart = res;
     });
  }

  public async eliminarProducto(item: number){
    return this.notebookApi.eliminarProducto(item).subscribe();

  }

  public incrementarProduct(item: any){
    if(this.cart.cantidad == 1){
      this.cart.cantidad +=1;
    }
    this.notebookApi.añadirCarrito(item);
    console.log('Producto Aumentado en 1')
  }

  public obtenerTotal(){
    return this.cart.reduce((i,j)=>i+j.precio* j.cantidad,0);
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.notebookApi.listarProductos().subscribe(res=>{
        this.cart = res;
       });
      event.target.complete();
    }, 2000);
  };



}
