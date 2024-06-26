import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokensDetailsPageRoutingModule } from './tokens-details-routing.module';

import { TokensDetailsPage } from './tokens-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokensDetailsPageRoutingModule
  ],
  declarations: [TokensDetailsPage]
})
export class TokensDetailsPageModule {}
