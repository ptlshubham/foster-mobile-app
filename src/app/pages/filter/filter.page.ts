
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(
    private modalController : ModalController,
    private router : Router
  ) { }

  ngOnInit() {
  }

  goBackFind(){
    this.modalController.dismiss();
    this.router.navigate(['tabs/tab2']);
  }

}
