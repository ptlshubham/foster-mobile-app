import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CesDesignTokenPageRoutingModule } from './ces-design-token-routing.module';

import { CesDesignTokenPage } from './ces-design-token.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CesDesignTokenPageRoutingModule
  ],
  declarations: [CesDesignTokenPage]
})
export class CesDesignTokenPageModule {}
