import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component';
import { SessionComponent } from './session/session.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomePageComponent },
    { path: 'session', component: SessionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);