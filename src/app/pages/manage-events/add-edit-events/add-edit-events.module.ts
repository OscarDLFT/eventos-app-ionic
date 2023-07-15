import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEventsComponent } from './add-edit-events.component';



@NgModule({
  declarations: [AddEditEventsComponent],
  exports: [AddEditEventsComponent],
  imports: [
    CommonModule
  ]
})
export class AddEditEventsModule { }
