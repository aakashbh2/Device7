import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'our-details',
  templateUrl: './our-details.component.html',
  styleUrls: ['./our-details.component.css']
})

export class OurDetailsComponent {

  currentNavigation;
  currentUrl;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
           this.currentNavigation = val;
           this.currentUrl = this.currentNavigation.urlAfterRedirects;
         });
  }
}
