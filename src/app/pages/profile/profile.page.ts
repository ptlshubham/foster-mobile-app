/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToDashboard() {
    this.router.navigate(["dashboard"]);
  }

  goToEmployeeList() {
    this.router.navigate(["employee-list"]);
  }

  goToClientList() {
    this.router.navigate(["client-list"]);
  }

  goToTokens() {
    this.router.navigate(["tokens"]);
  }

  goToCESDesignToken() {
    this.router.navigate(["ces-design-token"]);
  }

  goToTodoList() {
    this.router.navigate(["todo-list"]);
  }

  goToMonthlyWorkReport() {
    this.router.navigate(["monthly-work-report"]);
  }

  goToDailyWorkReport() {
    this.router.navigate(["daily-work"]);
  }

  goToHelpDesk() {
    this.router.navigate(["help-desk"]);
  }

  goToFavourite() {
    this.router.navigate(["favourite"]);
  }

  goToNotification() {
    this.router.navigate(["notification"]);
  }

  goToEditProfile() {
    this.router.navigate(["edit-profile"]);
  }

  logout() {
    this.router.navigate(["login"]);
  }

  onClick() {}
}
