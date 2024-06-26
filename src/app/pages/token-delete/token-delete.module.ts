import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokenDeletePageRoutingModule } from './token-delete-routing.module';

import { TokenDeletePage } from './token-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokenDeletePageRoutingModule
  ],
  declarations: [TokenDeletePage]
})
export class TokenDeletePageModule {}
