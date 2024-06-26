import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-employee-delete",
  templateUrl: "./employee-delete.page.html",
  styleUrls: ["./employee-delete.page.scss"],
})
export class EmployeeDeletePage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
