import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(private router: Router) {}

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
}
