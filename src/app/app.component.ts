import {Component, OnInit} from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  landingUrl: string = "/list";

  constructor(private location: PlatformLocation, private router: Router) {

      //redirect on back button.
      location.onPopState(() => {
        this.router.navigate([this.landingUrl]);
      });
      console.log(window.location.pathname);
      //redirect on refresh button.
      if (!window.location.hash.includes('list') && !window.location.hash.includes('home')) {
        console.log("fuytfgftyttttttttttttt")
        this.router.navigate([this.landingUrl]);
      }

  }
}