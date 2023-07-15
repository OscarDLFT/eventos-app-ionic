import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { AddEditEventsModule } from '../add-edit-events/add-edit-events.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    TranslateModule.forChild(),
    // AddEditEventsModule,
    // LoginModule,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
