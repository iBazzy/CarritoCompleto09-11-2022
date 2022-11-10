import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { idProducto } from '../modelo/productos';
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {
  public idActivo: number = 0;
  public productoActivo!: idProducto;
  constructor(private http : HttpClient,
    private notebookApi : TiendaService,
    private router: Router,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(parametros =>{
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

  public async borrarProducto(){
    return this.notebookApi.eliminarProduct(this.idActivo).subscribe(()=>{
      this.router.navigate(['listar']);
    })
  }

}
