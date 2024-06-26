
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToVerification() {
    this.router.navigate(['verification']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  onClick() {

  }

}
