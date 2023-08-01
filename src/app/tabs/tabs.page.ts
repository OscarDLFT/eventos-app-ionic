import { Component, OnInit } from '@angular/core';
import { PushNotificationSchema, PushNotifications } from '@capacitor/push-notifications';
import { NotificationsService } from '../service/notifications.service';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
    private notification: NotificationsService,
  ) {}

  ngOnInit(): void {
    const isPushNotificationvailable = Capacitor.isPluginAvailable('PushNotifications');
    if(!!isPushNotificationvailable){
      PushNotifications.requestPermissions().then(result => {
        if(result?.receive){
          PushNotifications.register();
        } else {
          console.error("No tienes permisos");
        }
      });
  
      PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
        this.notification.addNotification(notification);
        console.log(JSON.stringify(notification));
      });
    }
  }

}
