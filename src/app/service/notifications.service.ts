import { Injectable } from '@angular/core';
import { PushNotificationSchema } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private _notifications: PushNotificationSchema[] = [];

  public get notifications(): PushNotificationSchema[] {
    return this._notifications;
  }
  public set notifications(value: PushNotificationSchema[]) {
    this._notifications = value;
  }

  constructor() { } 

  public addNotification(notification: PushNotificationSchema): void {
    this._notifications.push(notification);
  }

  public removeNotification(notification: PushNotificationSchema): void {
    const notificationIndex = this.notifications.findIndex(x => x === notification);
    if(notificationIndex != 1){
      this._notifications.splice(notificationIndex, 1);
    }
  }

}
