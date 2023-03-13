import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { SessionComponent } from './session/session.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'session', component: SessionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);