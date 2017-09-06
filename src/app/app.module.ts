import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

import { ComparisonComponent } from './comparision-content/comparison.component';

import { AppServices } from './appServices';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    ComparisonComponent
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
