import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TiendaService } from 'src/app/servicio/tienda.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formuRegistro!: FormGroup;
  constructor(private builder: FormBuilder, private http: HttpClient,
    private navControl: NavController , private notebookApi: TiendaService) {
  }

  ngOnInit() {
    this.formuRegistro= this.builder.group({
      nombre:['',[Validators.required]],
      password: ['',[Validators.required]],
      tipoCliente:['cliente']

    })
  }
  registro(){
    this.http.post<any>(this.notebookApi.urlUsuari,this.formuRegistro.value).subscribe(
      res =>{
        alert("Usuario Registrado!");
        this.formuRegistro.reset();
        this.navControl.navigateRoot('');
      },err=>{
        alert("Uusario no Registrado");
      }
    )
  }
}
