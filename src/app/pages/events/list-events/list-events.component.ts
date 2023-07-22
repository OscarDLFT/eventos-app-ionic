import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss'],
})
export class ListEventsComponent  implements OnInit {

  public events: Events[] = [];

  constructor(
    private eventService: EventService
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

}
