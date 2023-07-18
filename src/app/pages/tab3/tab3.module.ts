import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Component } from './tab3.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from './login/login.module';
import { AddEditEventsModule } from './add-edit-events/add-edit-events.module';

const routes: Routes = [
  {
    path: '',
    component: Tab3Component,
  }
];

@NgModule({
  declarations: [Tab3Component],
  exports: [Tab3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    FormsModule,
    TranslateModule,
    LoginModule,
    AddEditEventsModule
  ]
})
export class Tab3Module { }
