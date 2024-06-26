import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientFullDetailsPageRoutingModule } from './client-full-details-routing.module';

import { ClientFullDetailsPage } from './client-full-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientFullDetailsPageRoutingModule
  ],
  declarations: [ClientFullDetailsPage]
})
export class ClientFullDetailsPageModule {}
