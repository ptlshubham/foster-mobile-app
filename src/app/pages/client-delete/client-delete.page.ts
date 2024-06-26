import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-client-delete",
  templateUrl: "./client-delete.page.html",
  styleUrls: ["./client-delete.page.scss"],
})
export class ClientDeletePage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
