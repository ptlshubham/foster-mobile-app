import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.page.html',
  styleUrls: ['./new-ticket.page.scss'],
})
export class NewTicketPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
