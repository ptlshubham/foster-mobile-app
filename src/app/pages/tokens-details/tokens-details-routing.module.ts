import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokensDetailsPage } from './tokens-details.page';

const routes: Routes = [
  {
    path: '',
    component: TokensDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokensDetailsPageRoutingModule {}
