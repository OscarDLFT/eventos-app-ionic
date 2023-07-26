import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Events } from 'src/app/models/events';
import { AuthService } from 'src/app/service/auth.service';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss'],
})
export class ListEventsComponent  implements OnInit {

  public events: Events[] = [];
  public eventSelected!: Events;

  constructor(
    private eventService: EventService,
    private auth: AuthService,
    private actionSheetCtrl: ActionSheetController,
    private translate: TranslateService,
    private navController: NavController,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.eventos();
  }

  eventos(): void {
    this.eventService.getFuturesEvents()
    .subscribe(events => {
      this.events = events;
    })
  }

  clickEvent(event: any): void {
    this.eventSelected = event;
    if(this.auth.isLogged){
      this.presentActionEvent();
    } else {

    }
  }

  async presentActionEvent() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: this.translate.instant('label.actions.event'),
      subHeader: 'Example subheader',
      buttons: [
        {
          text: this.translate.instant('label.open.url'),
          icon: 'earth-outline',
          handler: () => {
            
          },
        },
        {
          text: this.translate.instant('label.edit.event'),
          icon: 'caret-forward-circle',
          handler: () => {
            this.editEvent();
          },
        },
        {
          text: this.translate.instant('label.remove.event'),
          icon: 'trash',
          handler: () => {
            
          },
        },
        {
          text: this.translate.instant('label.close.options'),
          icon: 'close',
          role: 'cancel', //con el role puesto da por hecho que se va a hacer ese cancelar pero tmb se puede añadir aparte otra accion y harían las dos
        },
      ],
    });

    await actionSheet.present();
  }

  editEvent(): void {
    this.navParams.data['event'] = this.eventSelected;
    this.navController.navigateForward('/tabs/tab4');
  }

}
