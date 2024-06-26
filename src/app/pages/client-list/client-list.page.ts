import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CalenderPage } from "../calender/calender.page";
import { ClientFullDetailsPage } from "../client-full-details/client-full-details.page";
import { ClientDeletePage } from "../client-delete/client-delete.page";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.page.html",
  styleUrls: ["./client-list.page.scss"],
})
export class ClientListPage implements OnInit {
  clientList = [
    {
      img: "assets/images/g1.jpg",
      clientName: "Shiv Dugdhalay",
      managerName: "Divyangi Soni",
    },
    {
      img: "assets/images/g1.jpg",
      clientName: "GuruKrupa Jewellers",
      managerName: "Kajal Agrawal",
    },
  ];

  constructor(private modalController: ModalController) {}

  async onClientDetailsPage() {
    const modal = await this.modalController.create({
      component: ClientFullDetailsPage,
      cssClass: "custom_modal_bottom",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  async onCalenderPage() {
    const modal = await this.modalController.create({
      component: CalenderPage,
      cssClass: "custom_modal_center",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  async onClientDelete() {
    const modal = await this.modalController.create({
      component: ClientDeletePage,
      cssClass: "custom_modal_center_small",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  ngOnInit() {}
}
