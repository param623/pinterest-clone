import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Default route to Landing Page
    // { path: 'home', component: HomeComponent },
    // { path: 'watch', component: WatchComponent },
    // { path: 'explore', component: ExploreComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback route if no match
];
