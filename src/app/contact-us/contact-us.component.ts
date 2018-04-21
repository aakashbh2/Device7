import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent {
  public currentNavigation;
  public currentUrl;
  constructor(router: Router) {
    router.events.subscribe((val) => {
          this.currentNavigation = val;
          this.currentUrl = this.currentNavigation.urlAfterRedirects;
           if (!(val instanceof NavigationEnd)) {
               return;
           }
           window.scrollTo(0, 0)
         });
  }
}
