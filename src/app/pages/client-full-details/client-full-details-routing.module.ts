import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientFullDetailsPage } from './client-full-details.page';

const routes: Routes = [
  {
    path: '',
    component: ClientFullDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientFullDetailsPageRoutingModule {}
