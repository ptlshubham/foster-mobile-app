import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDashboardTodoListPage } from './client-dashboard-todo-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClientDashboardTodoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientDashboardTodoListPageRoutingModule {}
