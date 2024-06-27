import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-monthly-work-report",
  templateUrl: "./monthly-work-report.page.html",
  styleUrls: ["./monthly-work-report.page.scss"],
})
export class MonthlyWorkReportPage implements OnInit {
  percentage: number = 50; // Example percentage value

  getPercentageClass(percentage: number): string {
    return "stat-value gradient-90";

  }

  constructor() {}

  ngOnInit() {}
}
