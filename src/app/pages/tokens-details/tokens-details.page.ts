import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-tokens-details",
  templateUrl: "./tokens-details.page.html",
  styleUrls: ["./tokens-details.page.scss"],
})
export class TokensDetailsPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
