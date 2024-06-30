import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokenCalenderPageRoutingModule } from './token-calender-routing.module';

import { TokenCalenderPage } from './token-calender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokenCalenderPageRoutingModule
  ],
  declarations: [TokenCalenderPage]
})
export class TokenCalenderPageModule {}
