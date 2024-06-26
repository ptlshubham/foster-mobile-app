import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dailydetails',
  templateUrl: './dailydetails.page.html',
  styleUrls: ['./dailydetails.page.scss'],
})
export class DailydetailsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.back();
  }

}
