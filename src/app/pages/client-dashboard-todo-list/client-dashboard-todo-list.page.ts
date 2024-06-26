import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client-dashboard-todo-list',
  templateUrl: './client-dashboard-todo-list.page.html',
  styleUrls: ['./client-dashboard-todo-list.page.scss'],
})
export class ClientDashboardTodoListPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
