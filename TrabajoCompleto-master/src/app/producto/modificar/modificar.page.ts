import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from 'src/app/servicio/tienda.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  public imagenCargando = false;
  public imagenBase64='';
  formu: FormGroup;
  public idActiva=0;
  constructor(private builder: FormBuilder, private notebookApi:TiendaService
    ,private router: Router,    private rutaActiva: ActivatedRoute,) {

      this.formu= this.builder.group({
        nombre:['',[Validators.required,Validators.minLength(3),
        Validators.maxLength(25)]],
        detalle:['',[Validators.required,Validators.minLength(2)
          ,Validators.maxLength(100)]],
        precio:[,[Validators.required,Validators.min(1)]],
        stock:[,[Validators.required,Validators.min(1)]],
        imagen:['',[Validators.required]],
        marca:['',[Validators.required,Validators.min(3),Validators.max(30)]],
        categoria:['',[Validators.required,Validators.min(3),Validators.max(30)]],
        procesador:['',[Validators.required,Validators.min(3),Validators.max(30)]],
        ram:['',[Validators.required,Validators.min(3),Validators.max(1000)]],
        memoriaInterna:['',[Validators.required,Validators.min(3),Validators.max(1000)]],
      });
    }

     public campo(control: string){
      return this.formu.get(control);
    }
    public subirImagen(e: Event){
      this.imagenCargando= true;
      const elemento= e.target as HTMLInputElement;
      const archivo= elemento.files[0];
      console.log(archivo);

      const reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload=()=>{
        this.imagenCargando= false;
        console.log('Cargana Terminada');
        this.imagenBase64= reader.result as string;
      }
    }



  ngOnInit() {
    this.rutaActiva.params.subscribe(parametros => {
      this.idActiva = parametros.idProducto;
      this.notebookApi.obtenerProductoporID(this.idActiva)
      .subscribe(producto => {
        if(producto){
          this.imagenBase64 = producto.imagen;
          this.formu.setValue({
            ...producto
          });
          this.formu.updateValueAndValidity();
        }
        else{
          this.router.navigate(['']);
        }
      })
    })
  }

  public modificar(){
    if(this.formu.invalid || this.imagenCargando){
      this.formu.markAllAsTouched();
      return;
    }
    this.notebookApi.modificarProducto(this.idActiva,{
      ...this.formu.value,
      imagen: this.imagenBase64
    }).subscribe(datos => {
      if(datos){
        alert('Modificado')
        this.router.navigate(['']);
      }
    })
  }

}
