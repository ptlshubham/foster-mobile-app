import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientDashboardTodoListPageRoutingModule } from './client-dashboard-todo-list-routing.module';

import { ClientDashboardTodoListPage } from './client-dashboard-todo-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientDashboardTodoListPageRoutingModule
  ],
  declarations: [ClientDashboardTodoListPage]
})
export class ClientDashboardTodoListPageModule {}
