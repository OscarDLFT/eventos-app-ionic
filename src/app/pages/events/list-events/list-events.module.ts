import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventsComponent } from './list-events.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ListEventsComponent],
  exports: [ListEventsComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ]
})
export class ListEventsModule { }
