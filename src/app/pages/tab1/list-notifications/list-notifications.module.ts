import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNotificationsComponent } from './list-notifications.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ListNotificationsComponent],
  exports: [ListNotificationsComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
  ]
})
export class ListNotificationsModule { }
