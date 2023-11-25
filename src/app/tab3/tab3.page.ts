import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public toastController: ToastController,
  ) {}

   async obtenerMiUbicacion() {
    let ubicación = await Geolocation.getCurrentPosition();
    let ubicacionTexto = `Mi ubicación es: Latitud: ${ubicación.coords.latitude}, Longitud: ${ubicación.coords.longitude}`;
    this.presentToast(ubicacionTexto);
    //mostramos el mensaje de ubicación con el toast
   }
  
   async presentToast( mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
  
  
  
  
  

}
