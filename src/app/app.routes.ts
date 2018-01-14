import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ComparisonComponent } from './comparision-content/comparison.component'
import { ReviewComponent } from './review-content/review.component';
import { OurDetailsComponent } from './our-details/our-details.component';

export const routes: Routes = [
 { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
 { path: 'dashboard' , component: HomePageComponent },
 { path: 'compare/:id' , component: ComparisonComponent },
 { path: 'review/:id' , component: ReviewComponent },
 // { path: 'contact-us' , component: ContactUsComponent },
 { path: 'affiliate-marketing' , component: OurDetailsComponent },
 { path: 'tnc' , component: OurDetailsComponent },
 { path: 'privacy-policy' , component: OurDetailsComponent },
 { path: 'about-us' , component: OurDetailsComponent },
];
