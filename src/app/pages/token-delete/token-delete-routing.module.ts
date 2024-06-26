import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenDeletePage } from './token-delete.page';

const routes: Routes = [
  {
    path: '',
    component: TokenDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokenDeletePageRoutingModule {}
