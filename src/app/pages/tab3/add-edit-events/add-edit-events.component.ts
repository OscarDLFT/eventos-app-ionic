import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events';

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

  constructor() { }

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
    
  }
}
