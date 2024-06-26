import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";

@Component({
  selector: "app-token-delete",
  templateUrl: "./token-delete.page.html",
  styleUrls: ["./token-delete.page.scss"],
})
export class TokenDeletePage implements OnInit {
  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async alert() {
    await this.modalController.dismiss();

    const alert = await this.alertController.create({
      header: "Success",
      message: "Token successfully deleted",
      buttons: ["OK"],
    });

    await alert.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
