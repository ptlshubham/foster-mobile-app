import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NewTicketPage } from "../new-ticket/new-ticket.page";

@Component({
  selector: "app-help-desk",
  templateUrl: "./help-desk.page.html",
  styleUrls: ["./help-desk.page.scss"],
})
export class HelpDeskPage implements OnInit {
  tabs = "message";

  constructor(private modalController: ModalController) {}

  async goToNewTicket(){
    const modal = await this.modalController.create({
      component: NewTicketPage,
      cssClass: 'custom_modal_bottom_full',
      componentProps: { value: 123 },
    });

    await modal.present();
  }


  ngOnInit() {}
}
