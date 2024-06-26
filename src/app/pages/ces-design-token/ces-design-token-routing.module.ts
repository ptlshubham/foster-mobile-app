import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CesDesignTokenPage } from './ces-design-token.page';

const routes: Routes = [
  {
    path: '',
    component: CesDesignTokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CesDesignTokenPageRoutingModule {}
