import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-daily-work",
  templateUrl: "./daily-work.page.html",
  styleUrls: ["./daily-work.page.scss"],
})
export class DailyWorkPage implements OnInit {
  tabs: string = "daily";

  designer = [
    {
      designerName: "Priya Dave",
    },
    {
      designerName: "Vishal Prajapati",
    },
    {
      designerName: "Yaksh Patel",
    },
    {
      designerName: "Marvin Parmar",
    },
    {
      designerName: "Kishan Panchal",
    },
    {
      designerName: "Jenish Vaghela",
    },
    {
      designerName: "Mahir Rana",
    },
    {
      designerName: "Dhairya Patel",
    },
  ];

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}

  goToDailydetails(){
    this.router.navigate(['dailydetails'])
  }

  ngOnInit() {}

  back(){
    this.navCtrl.back();
  }
  
}
