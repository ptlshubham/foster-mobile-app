import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTokenPage } from './new-token.page';

const routes: Routes = [
  {
    path: '',
    component: NewTokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTokenPageRoutingModule {}
