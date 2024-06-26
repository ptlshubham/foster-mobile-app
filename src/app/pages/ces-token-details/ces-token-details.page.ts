import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-ces-token-details",
  templateUrl: "./ces-token-details.page.html",
  styleUrls: ["./ces-token-details.page.scss"],
})
export class CesTokenDetailsPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
