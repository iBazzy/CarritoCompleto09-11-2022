import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private alertController: AlertController, private navControl: NavController) { }

  ngOnInit() {

  }
  async salir(){
    const alert= await this.alertController.create({
      header:'Cerar Sesión',
      message:'¿Realmente quieres cerrar sesión?',
      buttons: [
        {
          text:'No',
          handler:() =>{

          }
        },
        {
          text: 'Si',
          handler:()=>{
            this.navControl.navigateRoot('');
          }
        }
      ]

    });
    await alert.present();
  }
}
