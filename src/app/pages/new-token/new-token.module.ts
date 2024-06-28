import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTokenPageRoutingModule } from './new-token-routing.module';

import { NewTokenPage } from './new-token.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTokenPageRoutingModule
  ],
  declarations: [NewTokenPage]
})
export class NewTokenPageModule {}
