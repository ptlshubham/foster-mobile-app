import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


interface Client {
  id: number;
  name: string;
}

interface Manager {
  id: number;
  name: string;
}

interface Designer {
  id: number;
  name: string;
}

@Component({
  selector: 'app-new-token',
  templateUrl: './new-token.page.html',
  styleUrls: ['./new-token.page.scss'],
})

export class NewTokenPage implements OnInit {
  @Input() staffModel: { role: string }; // Input for staff role
  @Input() employeeList: Client[]; // Input for employee list
  @Input() clientlist: Client[]; // Input for client list
  @Input() managerlist: Manager[]; // Input for manager list
  @Input() designerlist: Designer[]; // Input for designer list
  @Input() selectedDeliveryDate: string; // Input for selected delivery date

  selectedClient: Client;
  selectedManager: Manager;
  selectedDesigner: Designer;
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onClientChange(event: { component: any; value: any }) {
    this.selectedClient = event.value;
  }

  onManagerChange(event: { component: any; value: any }) {
    this.selectedManager = event.value;
  }

  onDesignerChange(event: { component: any; value: any }) {
    this.selectedDesigner = event.value;
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }
}
