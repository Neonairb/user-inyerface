import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { SessionComponent } from './session/session.component';
import { PpInterestsComponent } from './pp-interests/pp-interests.component';
import { VictoryComponent } from './victory/victory.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'session', component: SessionComponent },
    { path: 'interests', component: PpInterestsComponent },
    { path: 'victory', component: VictoryComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);