import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotebookModificar } from 'src/app/producto/modelo/productos';
import { TiendaService } from 'src/app/servicio/tienda.service';

@Component({
  selector: 'app-modificar-cart',
  templateUrl: './modificar-cart.page.html',
  styleUrls: ['./modificar-cart.page.scss'],
})
export class ModificarCartPage implements OnInit {
  public idActiva='';
  carritoMod: FormGroup;
  public productoActivo!: NotebookModificar;
  public cargarArchivo= false;
  constructor(private notebookApi:TiendaService, private router: Router,
    private builder : FormBuilder ,private rutaActiva: ActivatedRoute) {
    this.carritoMod= this.builder.group({
      cantidad:[1,[Validators.required,Validators.min(1)]]
    })
  }

  public campo(control: string){
    return this.carritoMod.get(control);
  }
  public modificarCarrito(){
    if(this.carritoMod.invalid && this.cargarArchivo ){
      this.carritoMod.markAllAsTouched();
      return;
    }
    this.notebookApi.modificarPorID(+this.idActiva,{
      ...this.carritoMod.value
    }).subscribe(datos => {
      if(datos){
        alert('Modificado')
        this.router.navigate(['carrito']);
      }
    })
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(pararametros => {
      this.idActiva = pararametros.get('idProducto');
      this.notebookApi.modificarCarrito(+this.idActiva)
        .subscribe(elemento => {
          this.productoActivo = elemento;
          this.carritoMod.get('cantidad').setValue(elemento.cantidad);
          this.carritoMod.updateValueAndValidity();
        })
    })
  }


}
