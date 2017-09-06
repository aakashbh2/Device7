import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ComparisonComponent } from './comparision-content/comparison.component'

export const routes: Routes = [
 { path: '' , component: HomePageComponent },
 { path: 'compare/:id' , component: ComparisonComponent }
];