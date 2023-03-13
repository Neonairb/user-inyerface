import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { PpInterestsComponent } from './pp-interests/pp-interests.component';
import { HomeComponent } from './home/home.component';
import { VictoryComponent } from './victory/victory.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    PpInterestsComponent,
    HomeComponent,
    VictoryComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
