import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PinListComponent } from './components/pin-list/pin-list.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Default route to Landing Page
    { path: 'pins', component: PinListComponent }, // Route for pin list
    { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback route if no match
];
