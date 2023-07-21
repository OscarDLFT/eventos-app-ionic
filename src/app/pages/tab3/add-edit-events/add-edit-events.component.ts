import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Events } from 'src/app/models/events';
import { EventService } from 'src/app/service/event.service';
import { ToastService } from 'src/app/service/toast.service';

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
  ) { }

  ngOnInit() {
    this.initEvent();
  }

  initEvent(): void {
    if(!this.event){
      this.edit = false;
      this.event = new Events();
      this.showEnd = false;
      this.event.className = 'blog';
    } else {
      this.edit = true;
    }
  }

  addEditEvent(): void {
    if(this.edit){
    } else {
      this.eventService.addEvent(this.event).then(() => {
        this.toastService.showToast(this.translate.instant('label.add.event.success'));
      }).catch(error => {
        console.error(error); 
        this.toastService.showToast(this.translate.instant('label.add.event.error'))
      });
    }
  }
}
