import { RouterModule, Routes } from '@angular/router'
import { InicioComponent } from './inicio/inicio.component';
import { SessionComponent } from './session/session.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'session', component: SessionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);