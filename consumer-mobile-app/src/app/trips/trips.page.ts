import { Component, OnInit } from '@angular/core';
import {NavController } from '@ionic/angular'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage /* implements OnInit */ {

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