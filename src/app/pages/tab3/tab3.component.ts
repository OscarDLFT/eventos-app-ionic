import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AddEditEventsComponent } from './add-edit-events/add-edit-events.component';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss'],
})
export class Tab3Component  implements OnInit {

  @ViewChild(AddEditEventsComponent, {static: false}) manage!: AddEditEventsComponent;

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit() {}

  ionViewWillEnter(): void{
    if(this.auth.isLogged && this.manage){
      this.manage.initEvent();
    }
  }

  logout(): void {
    this.auth.logout();
  }

}
