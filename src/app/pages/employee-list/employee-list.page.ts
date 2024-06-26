import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EmployeeFullDetailsPage } from "../employee-full-details/employee-full-details.page";
import { EmployeeDeletePage } from "../employee-delete/employee-delete.page";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.page.html",
  styleUrls: ["./employee-list.page.scss"],
})
export class EmployeeListPage implements OnInit {
  employeeList = [
    {
      img: "assets/images/g1.jpg",
      employeeName: "Divyangi Soni",
      role: "Manager",
    },
    {
      img: "assets/images/g1.jpg",
      employeeName: "Divyangi Soni",
      role: "Manager",
    },
  ];

  constructor(private modalController: ModalController) {}

  async onEmployeeDetails() {
    const modal = await this.modalController.create({
      component: EmployeeFullDetailsPage,
      cssClass: "custom_modal_bottom_full",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  async onEmployeeDelete() {
    const modal = await this.modalController.create({
      component: EmployeeDeletePage,
      cssClass: "custom_modal_center_small",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  ngOnInit() {}
}
