import { Component, NgZone, OnInit } from '@angular/core';
import { PushNotificationSchema, PushNotificationToken, PushNotifications } from '@capacitor/push-notifications';
import { NotificationsService } from '../service/notifications.service';
import { Capacitor } from '@capacitor/core';
import { Badge } from '@ionic-native/badge/ngx';
import { StorageService } from '../service/storage.service';
import { ToastService } from '../service/toast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
    private notification: NotificationsService,
    private badge: Badge,
    private storageService: StorageService,
    private toastService: ToastService,
    private translate: TranslateService,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.badge.isSupported().then((support) => {
      console.log("support: " + support);
    });
    const isPushNotificationvailable = Capacitor.isPluginAvailable('PushNotifications');
    if(!!isPushNotificationvailable){
      this.storageService.getItem('notifications').then(result => {
        if(result.value){
          this.notification.notifications = JSON.parse(result.value);
          this.badge.set(this.notification.notifications.length);
        } else {
          this.badge.clear();
        }
      });

      PushNotifications.requestPermissions().then(result => {
        if(result?.receive){
          PushNotifications.register();
        } else {
          console.error("No tienes permisos");
        }
      });

      PushNotifications.addListener('registration', (token: PushNotificationToken) => {
        console.log("Token", token);
      });
  
      PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
        this.notification.addNotification(notification);
        console.log(JSON.stringify(notification));
        this.badge.increase(1);
        this.storageService.setItem('notifications', this.notification.notifications);
        this.toastService.showToast(this.translate.instant('label.new.notification'));
        this.zone.run(() => {});
      });
    }
  }

  get _numeroNot(): number {
    return 11;
  }

}
