import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDeletePage } from './client-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ClientDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientDeletePageRoutingModule {}
