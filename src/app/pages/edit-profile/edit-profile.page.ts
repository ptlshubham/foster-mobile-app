
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(
    private navctr : NavController,
    private router : Router
  ) { }

  ngOnInit() {
  }

  goBackProfile(){
    this.navctr.back();
  }

  goToProfile(){
    this.router.navigate(['tabs/tab5']);
  }

}
