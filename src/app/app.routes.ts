import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PinListComponent } from './components/pin-list/pin-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Default route to Landing Page
    { path: 'pins', component: PinListComponent }, // Route for pin list
    { path: 'login', component: LoginComponent }, // Route for login
    { path: 'signup', component: SignupComponent }, // Route for signup
    { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback route if no match
];
