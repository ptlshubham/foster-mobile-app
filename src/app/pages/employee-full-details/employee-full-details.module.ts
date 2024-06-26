import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeFullDetailsPageRoutingModule } from './employee-full-details-routing.module';

import { EmployeeFullDetailsPage } from './employee-full-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeFullDetailsPageRoutingModule
  ],
  declarations: [EmployeeFullDetailsPage]
})
export class EmployeeFullDetailsPageModule {}
