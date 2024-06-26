import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailydetailsPageRoutingModule } from './dailydetails-routing.module';

import { DailydetailsPage } from './dailydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailydetailsPageRoutingModule
  ],
  declarations: [DailydetailsPage]
})
export class DailydetailsPageModule {}
