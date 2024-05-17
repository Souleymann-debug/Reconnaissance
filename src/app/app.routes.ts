import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppComponent } from './app.component';
import { CniaiComponent } from './cniai/cniai.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'cni-ai', component: CniaiComponent },
];
