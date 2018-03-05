import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { AppServices } from '../appServices';

@Component({
  selector: 'our-details',
  templateUrl: './our-details.component.html',
  styleUrls: ['./our-details.component.css']
})

export class OurDetailsComponent implements OnInit {
  public data = {
    "title": "",
    "url": "",
    "description": ""
  };
  public currentUrl;
  public currentNavigation;

  constructor(location: Location, router: Router,
  private _appServices: AppServices) {
    router.events.subscribe((val) => {
          this.currentNavigation = val;
          this.currentUrl = this.currentNavigation.urlAfterRedirects;
           if (!(val instanceof NavigationEnd)) {
               return;
           }
           window.scrollTo(0, 0)
         });
  }

	ngOnInit():void {
 		this.fetchFooterNotes();
	}

	fetchFooterNotes() {
    	this._appServices.fetchFooterNotes().subscribe((data) => {
        data.some((res) => {
          if (res.url === this.currentUrl) {
              this.data = res;
          }
        })
      },
      error => {
        console.log(error);
      });
    }
}
