import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventsComponent } from './list-events.component';



@NgModule({
  declarations: [ListEventsComponent],
  exports: [ListEventsComponent],
  imports: [
    CommonModule
  ]
})
export class ListEventsModule { }
