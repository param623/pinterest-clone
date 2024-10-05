import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pin-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pin-card.component.html',
  styleUrl: './pin-card.component.scss'
})
export class PinCardComponent {
  @Input() pin!: { imageUrl: string; description: string; };
  savedPins: { imageUrl: string; description: string }[] = [];

  savePin(pin: { imageUrl: string; description: string }) {
    this.savedPins.push(pin);
    console.log('Pin saved:', pin);
  }
}
