import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from './tab1.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListNotificationsModule } from './list-notifications/list-notifications.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: Tab1Component,
  }
];

@NgModule({
  declarations: [Tab1Component],
  exports: [Tab1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    FormsModule,
    ListNotificationsModule,
    TranslateModule
  ]
})
export class Tab1Module { }
