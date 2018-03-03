import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ComparisonComponent } from './comparision-content/comparison.component';
import { ReviewComponent } from './review-content/review.component';
import { OurDetailsComponent } from './our-details/our-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppServices } from './appServices';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    ComparisonComponent,
    ReviewComponent,
    OurDetailsComponent,
    ContactUsComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
