import { Component } from '@angular/core';
import { NotificacionesService } from  './../servicios/notificaciones.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public notificaciones: NotificacionesService ) {}

  async notificar(){
    this.notificaciones.permisoNotificacion().then( () => {
      this.notificaciones.enviarNotificacion();
    })
  }

  cancelar(){
    this.notificaciones.cancelarNotificacion();
  }

  cancelarTodas(){
    this.notificaciones.cancelarTodasLasNotificaciones();
  }

}
