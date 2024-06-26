
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  goToAppointment(){
    this.router.navigate(['tabs/tab3']);
  }

  onClick(){

  }

}
