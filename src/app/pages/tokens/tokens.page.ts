import { Component, OnInit } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";
import { TokensDetailsPage } from "../tokens-details/tokens-details.page";
import { TokenDeletePage } from "../token-delete/token-delete.page";
import { Router } from "@angular/router";

@Component({
  selector: "app-tokens",
  templateUrl: "./tokens.page.html",
  styleUrls: ["./tokens.page.scss"],
})
export class TokensPage implements OnInit {
  tabs = "token";
  tokenTabs: string = "all";

  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.tabs === "token") {
      this.tokenTabs = "all";
    }
  }

  async goToTokendetails() {
    const modal = await this.modalController.create({
      component: TokensDetailsPage,
      cssClass: "custom_modal",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  async goToTokenDelete() {
    const modal = await this.modalController.create({
      component: TokenDeletePage,
      cssClass: "custom_modal_center_small",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  // goToTokenDelete(){
  //   this.router.navigate(['token-delete']);
  // }
}
