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

  user = [
    {
      finished: 0.5,
      new_User: 0.4,
    },
    {
      finished: 0.6,
      new_User: 0.3,
    },
    {
      finished: 0.7,
      new_User: 0.2,
    },
    {
      finished: 0.8,
      new_User: 0.1,
    },
    {
      finished: 0.45,
      new_User: 0.34,
    },
    {
      finished: 0.6,
      new_User: 0.2,
    },
    {
      finished: 0.7,
      new_User: 0.67,
    },
    {
      finished: 0.85,
      new_User: 0.45,
    },
    {
      finished: 0.34,
      new_User: 0.87,
    },
    {
      finished: 0.99,
      new_User: 0.87,
    },
    {
      finished: 0.18,
      new_User: 0.0,
    },
    {
      finished: 0.30,
      new_User: 0.100,
    },
    {
      finished: 0.20,
      new_User: 0.50,
    },
    {
      finished: 0.50,
      new_User: 0.50,
    },
    {
      finished: 0.9,
      new_User: 0.87,
    },
  ]
  constructor() { }

  ngOnInit() { }
}
