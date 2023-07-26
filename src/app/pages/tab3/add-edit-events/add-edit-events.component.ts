import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Events } from 'src/app/models/events';
import { EventService } from 'src/app/service/event.service';
import { ToastService } from 'src/app/service/toast.service';
import * as moment from 'moment';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-add-edit-events',
  templateUrl: './add-edit-events.component.html',
  styleUrls: ['./add-edit-events.component.scss'],
})
export class AddEditEventsComponent  implements OnInit {

  /** BOOLEANS */
  public edit: boolean = false;
  public showEnd: boolean = false;

  /**VARIABLES */
  public event!: Events;

  constructor(
    private eventService: EventService,
    private toastService: ToastService,
    private translate: TranslateService,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.initEvent();
  }

  initEvent(): void {
    this.event = this.navParams.data['event'];
    if(!this.event){
      this.edit = false;
      this.event = new Events();
      this.showEnd = false;
      this.event.className = 'blog';
    } else {
      this.edit = true;
      this.showEnd = this.event.end != null;
    }
  }

  addEditEvent(): void {
    this.event.start = moment(this.event.start).format('YYYY.MM.DDTHH:mm');

    if(this.showEnd){
      this.event.end = moment(this.event.end).format('YYYY.MM.DDTHH:mm');
    } else {
      this.event.end = null;
    }

    if(this.edit){
      this.eventService.editEvent(this.event).then(() => {
        this.toastService.showToast(this.translate.instant('label.edit.event.success'));
      }).catch(error => {
        console.error(error); 
        this.toastService.showToast(this.translate.instant('label.edit.event.error'))
      });
    } else {
      this.eventService.addEvent(this.event).then(() => {
        this.toastService.showToast(this.translate.instant('label.add.event.success'));
      }).catch(error => {
        console.error(error); 
        this.toastService.showToast(this.translate.instant('label.add.event.error'))
      });
    }
  }

  newEvent(): void {
    this.event = new Events();
    this.edit = false;
    this.showEnd = false;
    this.event.className = 'blog';
  }
}
