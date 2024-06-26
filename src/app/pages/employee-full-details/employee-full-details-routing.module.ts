import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeFullDetailsPage } from './employee-full-details.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeFullDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeFullDetailsPageRoutingModule {}
