
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  tab = 1;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['tabs/tab1'])
  }

  onClick(){

  }

}
