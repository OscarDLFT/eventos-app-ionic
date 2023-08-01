import { Component, OnInit } from '@angular/core';
import { PushNotificationSchema } from '@capacitor/push-notifications';
import { NotificationsService } from 'src/app/service/notifications.service';

@Component({
  selector: 'app-list-notifications',
  templateUrl: './list-notifications.component.html',
  styleUrls: ['./list-notifications.component.scss'],
})
export class ListNotificationsComponent  implements OnInit {

  public notifications: PushNotificationSchema[] = [];
  constructor(
    private notificationService: NotificationsService,
  ) { }

  ngOnInit() {
    this.iniNotifications();
  }

  iniNotifications(): void {
    this.notifications = this.notificationService.notifications;
  }
}
