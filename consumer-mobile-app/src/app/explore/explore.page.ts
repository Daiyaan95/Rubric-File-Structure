import { Component, OnInit } from '@angular/core';
import {NavController } from '@ionic/angular'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage /* implements OnInit */ {

  constructor(
    private navCtrl: NavController) {
   }


  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }

  navToExplore() {
    this.navCtrl.navigateForward("explore");
  }

  navToTrips() {
    this.navCtrl.navigateForward("trips");
  }
 /*  ngOnInit() {
  } */

}
