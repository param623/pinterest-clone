import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PinCardComponent } from './components/pin-card/pin-card.component';
import { PinListComponent } from './components/pin-list/pin-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PinCardComponent, PinListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pinterest-clone';
  searchTerm: string = '';

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
