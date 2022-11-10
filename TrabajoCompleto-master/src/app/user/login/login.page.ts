import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TiendaService } from 'src/app/servicio/tienda.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  FormularioLogin!: FormGroup;
  constructor(private builder: FormBuilder, private http: HttpClient, private router: Router, private notebookApi:TiendaService,
    private navControl: NavController) { }

  ngOnInit(): void{
    this.FormularioLogin = this.builder.group({
      nombre: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  logIn() {
    this.http.get<any>(this.notebookApi.urlUsuari).subscribe(res => {
      const user = res.find((a: any) => {
        return a.nombre === this.FormularioLogin.value.nombre && a.password ===
          this.FormularioLogin.value.password
      })
      if (user.tipoCliente == 'admin') {
        alert("Eres un fvcking admin!!!");
        this.FormularioLogin.reset();
        this.router.navigate(['listar'])
      } if (user.tipoCliente == 'cliente'){
        alert("Usuario Cliente Logeado")
        this.FormularioLogin.reset();
        this.navControl.navigateRoot('inicio')
      }else{

      }
    }, err => {
      alert("No puedes Logearte!")
    }
    )
  }
}
