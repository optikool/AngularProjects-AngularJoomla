import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialMediaComponent } from './social/social-media/social-media.component';
import { NavMainComponent } from './navbars/nav-main/nav-main.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaComponent,
    NavMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
