import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailydetailsPage } from './dailydetails.page';

const routes: Routes = [
  {
    path: '',
    component: DailydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailydetailsPageRoutingModule {}
