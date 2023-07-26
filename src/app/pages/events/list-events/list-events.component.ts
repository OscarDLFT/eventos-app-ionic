import { ToastService } from './../../../service/toast.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Events } from 'src/app/models/events';
import { AuthService } from 'src/app/service/auth.service';
import { EventService } from 'src/app/service/event.service';
import { Browser } from '@capacitor/browser';

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
    private toastService: ToastService,
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
      this.openUrl(this.eventSelected.url);
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
            this.openUrl(this.eventSelected?.url);
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
            this.removeEvent();
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

  async openUrl(url: string | null | undefined): Promise<void> {
    if(url){
    await Browser.open({url})
    }
  }

  removeEvent(): void {
    this.navParams.data['event'] = null;
    this.eventService.deleteEvent(this.eventSelected.id)
    .then(() => {
      this.toastService.showToast(this.translate.instant('label.delete.ok'));
    }).catch(e => {
      this.toastService.showToast(this.translate.instant('label.delete.error'))
    });
  }

}
