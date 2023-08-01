import { Component, OnInit, ViewChild } from '@angular/core';
import { ListNotificationsComponent } from './list-notifications/list-notifications.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss'],
})
export class Tab1Component  implements OnInit {
  @ViewChild('listNot', { static: true }) listNot!: ListNotificationsComponent;

  constructor() { }

  ngOnInit() {
    // this.ionViewWillEnter()
  }

  ionViewWillEnter(): void{
    if(this.listNot){
      this.listNot.iniNotifications();
    }
  }

}
