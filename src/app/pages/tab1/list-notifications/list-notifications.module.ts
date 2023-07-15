import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNotificationsComponent } from './list-notifications.component';



@NgModule({
  declarations: [ListNotificationsComponent],
  exports: [ListNotificationsComponent],
  imports: [
    CommonModule
  ]
})
export class ListNotificationsModule { }
