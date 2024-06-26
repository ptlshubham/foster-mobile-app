import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-client-full-details",
  templateUrl: "./client-full-details.page.html",
  styleUrls: ["./client-full-details.page.scss"],
})
export class ClientFullDetailsPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
