import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Events } from 'src/app/models/events';


@Injectable({
  providedIn: 'root'
})
export class EventService {

constructor(
  private db: AngularFireDatabase,
) { }

addEvent(event: Events): Promise<boolean>{
  return new Promise((resolve, reject) => {
    try {
      let eventRef = this.db.database.ref('eventos');
      let newEvent = eventRef.push();
      event.id = newEvent.key;
      let eventRefId = this.db.database.ref('eventos/' + event.id);
      eventRefId.set(event);
      resolve(true);
    } catch (error) {
      reject('error')
    }
  });
}

editEvent(event: Events): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      this.db.object("/eventos/" + event.id).set(event);
      resolve(true);
    } catch (error) {
      reject('error')
    }
  });
}

/** De los eventos que hay coge ordenados los eventos que empiezan por el día en el que se está */
getFuturesEvents(): Observable<Events[]> {
  const hoy = moment().format('YYYY.MM.DD');
  return this.db.list<Events>('eventos', ref => ref.orderByChild('start').startAt(hoy)).valueChanges();
}

}
