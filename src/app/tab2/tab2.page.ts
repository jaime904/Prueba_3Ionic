import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Network, ConnectionStatus } from '@capacitor/network';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  status: string="";
  conectionType: string="";

  constructor(
    private change: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getNetworkStatus()
  }

  getNetworkStatus(){

    Network.getStatus().then(
      (status:ConnectionStatus)=>{
        this.status = (status.connected)?
        "connected":"disconnected";
        this.conectionType = status.connectionType;
        this.onNetworkChanged();
      }
    )
  }

  onNetworkChanged()
  {
    Network.addListener("networkStatusChange",(status)=>{
      this.status = (status.connected)?
      "connected":"disconnected";
      this.conectionType = status.connectionType;
      this.change.detectChanges();
    })
  }

}
