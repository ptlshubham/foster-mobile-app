import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderPageRoutingModule } from './calender-routing.module';

import { CalenderPage } from './calender.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    NgCalendarModule,
    FormsModule,
    IonicModule,
    CalenderPageRoutingModule
  ],
  declarations: [CalenderPage]
})
export class CalenderPageModule {}
