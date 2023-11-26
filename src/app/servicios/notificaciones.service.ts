import { Injectable } from '@angular/core';
import { CancelOptions, LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor() { }

  async enviarNotificacion() {
    const estadoPermiso = await LocalNotifications.checkPermissions();
    if(estadoPermiso.display == 'granted'){
      let options: ScheduleOptions = {
        notifications: [
          {
            id: 111,
            title: "Notificacion 1",
            body: "primera notificacion",
            largeBody: "¡¡Esta es la primera notificacion!!",
            summaryText: "¡¡Exito!!"
          }
        ]
      }
      try{
        await LocalNotifications.schedule(options);
      }
      catch(ex){
        alert(JSON.stringify(ex));
      }
    }
  }

  async permisoNotificacion() {
    await LocalNotifications.requestPermissions();
  }


  async cancelarNotificacion() {
    let op: CancelOptions={
      notifications: [{id:111}]
    }
    await LocalNotifications.cancel(op);
  }

  async cancelarTodasLasNotificaciones() {
    await LocalNotifications.removeAllDeliveredNotifications();
  }
}
