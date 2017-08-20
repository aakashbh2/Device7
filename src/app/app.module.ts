import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsLetterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { AppServices } from './appServices';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsLetterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
