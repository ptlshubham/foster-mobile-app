import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CesDesignTokenPageModule } from "./ces-design-token.module";
import { CesTokenDetailsPage } from "../ces-token-details/ces-token-details.page";

@Component({
  selector: "app-ces-design-token",
  templateUrl: "./ces-design-token.page.html",
  styleUrls: ["./ces-design-token.page.scss"],
})
export class CesDesignTokenPage implements OnInit {
  tabs = "all";

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async goToCESTokenDetails() {
    const modal = await this.modalController.create({
      component: CesTokenDetailsPage,
      cssClass: "custom_modal_bottom",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

}
