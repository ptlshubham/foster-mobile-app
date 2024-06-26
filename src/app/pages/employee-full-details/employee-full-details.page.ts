import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-employee-full-details",
  templateUrl: "./employee-full-details.page.html",
  styleUrls: ["./employee-full-details.page.scss"],
})
export class EmployeeFullDetailsPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
