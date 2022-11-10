import { Component, OnInit } from '@angular/core';
import { idProducto } from '../modelo/productos';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TiendaService } from 'src/app/servicio/tienda.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public idActivo: number=0;
  public productoActivo!: idProducto;
  public producto: Array<idProducto> = [];
  constructor(private notebookApi:TiendaService,
     private rutaActiv: ActivatedRoute,
     private router: Router ) { }

  ngOnInit() {
    this.rutaActiv.paramMap.subscribe(parametros =>{
      this.idActivo= +parametros.get('idProducto')
      console.log(this.idActivo)
      this.notebookApi.obtenerProductoporID(this.idActivo).subscribe
      (datos=>{
        if(datos){
          this.productoActivo= datos;
        }else{
          this.router.navigate(['']);
        }

      })
    });
  }

  addToCart(product){
    this.notebookApi.añadirCarrito(product);
    alert('PRODUCTO AGREGADO!');
    console.log(this.producto);
  }
}
