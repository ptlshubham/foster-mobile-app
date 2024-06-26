import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientDeletePageRoutingModule } from './client-delete-routing.module';

import { ClientDeletePage } from './client-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientDeletePageRoutingModule
  ],
  declarations: [ClientDeletePage]
})
export class ClientDeletePageModule {}
