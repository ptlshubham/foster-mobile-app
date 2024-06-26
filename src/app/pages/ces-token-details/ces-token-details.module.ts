import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CesTokenDetailsPageRoutingModule } from './ces-token-details-routing.module';

import { CesTokenDetailsPage } from './ces-token-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CesTokenDetailsPageRoutingModule
  ],
  declarations: [CesTokenDetailsPage]
})
export class CesTokenDetailsPageModule {}
