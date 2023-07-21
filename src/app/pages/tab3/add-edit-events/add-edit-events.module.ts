import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEventsComponent } from './add-edit-events.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [AddEditEventsComponent],
  exports: [AddEditEventsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule
  ]
})
export class AddEditEventsModule { }
