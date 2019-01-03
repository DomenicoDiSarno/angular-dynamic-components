import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AdDirective} from './ad.directive';
import {HeroJobAdComponent} from './hero-job-ad.component';
import {HeroProfileComponent} from './hero-profile.component';
import {AdBannerComponent} from './ad-banner.component';
import {AdService} from './ad.service';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    AdDirective,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AdService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
