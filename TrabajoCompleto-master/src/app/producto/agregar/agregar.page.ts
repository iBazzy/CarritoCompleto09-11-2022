import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { Productos } from '../modelo/productos';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  public formulario: FormGroup;
  public imagenCargando= false;
  public imagenBase64='';
  constructor(private builder: FormBuilder, private notebookApi:TiendaService
    ,private router: Router) {


      this.formulario= this.builder.group({
        nombre:['',[Validators.required,Validators.minLength(3),
        Validators.maxLength(25)]],
        detalle:['',[Validators.required,Validators.minLength(2)
          ,Validators.maxLength(100)]],
        precio:[,[Validators.required,Validators.min(1)]],
        imagen:['',[Validators.required]],
        cantidad:[1,[Validators.required]],
        marca:['',[Validators.required,Validators.min(3),Validators.max(30)]],
        categoria:['',[Validators.required,Validators.min(3),Validators.max(30)]],
        procesador:['',[Validators.required,Validators.min(3),Validators.max(30)]],
        ram:['',[Validators.required,Validators.min(3),Validators.max(1000)]],
        memoriaInterna:['',[Validators.required,Validators.min(3),Validators.max(1000)]],

      })
    }

    public campo(control: string){
      return this.formulario.get(control);
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

    public guardarImagen():void{
      if(this.formulario.invalid || this.imagenCargando){
        this.formulario.markAllAsTouched();
        return;
      }
      this.notebookApi.agregarNotebook({
        ...this.formulario.value,
        imagen: this.imagenBase64
      })
      .subscribe(resultado =>{
        if(resultado){
          this.formulario.reset();
          this.formulario.updateValueAndValidity();
          alert('Imagen Guardada!');
          this.router.navigate(['/listar']);
        }
      })
    }



  ngOnInit() {
  }

}
