import { Component, OnInit } from '@angular/core';
import { idProducto } from '../modelo/productos';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { idUsuario } from '../modelo/user';
import { Carrito, idCarrito } from '../modelo/carrito';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public usuarioActivo!:idUsuario;
  public idActivo: number=0;
  public idActivo2: number=0;
  public productoActivo!: idProducto;
  public carritoActivo!:idCarrito;
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
    this.rutaActiv.paramMap.subscribe(usuario=>{
      this.idActivo2 =+ usuario.get('idUsuario')
      console.log(this.idActivo2)
      this.notebookApi.getIdUser(this.idActivo2).subscribe(data=>{
        if(data){
          this.usuarioActivo=data;
        }else{
          console.log('error')
        }
      })
    })

  }

  addToCart(nombre:string,precio:number,cantidad:number,productoId:number,usuarioId:number,imagen:string){
    const Carrito : Carrito ={
      "nombre":nombre,
      "precio":precio,
      "cantidad":cantidad,
      "productoId":productoId,
      "usuarioId": usuarioId,
      "imagen":imagen
    }
    this.notebookApi.añadirCarrito(Carrito);

    alert('PRODUCTO AGREGADO!');
    console.log(this.productoActivo);
    console.log(this.carritoActivo);
  }


}
