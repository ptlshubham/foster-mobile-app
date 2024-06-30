import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenCalenderPage } from './token-calender.page';

const routes: Routes = [
  {
    path: '',
    component: TokenCalenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokenCalenderPageRoutingModule {}
