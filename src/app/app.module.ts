import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { InicioComponent } from './home/home.component';
import { SessionComponent } from './session/session.component';
import { PpInterestsComponent } from './pp-interests/pp-interests.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SessionComponent,
    PpInterestsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
