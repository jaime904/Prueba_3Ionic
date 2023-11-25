import { Component } from '@angular/core';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  async scheduleNotification() {
    let options: ScheduleOptions = {
      notifications: [
        {
          id: 111,
          title: "Notificacion 1",
          body: "Esta es la primera notificacion", //esto no aparece
          largeBody: "Esta es la primera notificacion!!",
          summaryText: "Exito!!"
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
