import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SocialmediaComponent } from './social/socialmedia.component';
import { NavmainComponent } from './navbars/navmain.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    SocialmediaComponent,
    NavmainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
