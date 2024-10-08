import { Component, Input } from '@angular/core';
import { PinCardComponent } from '../pin-card/pin-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pin-list',
  standalone: true,
  imports: [PinCardComponent, CommonModule],
  templateUrl: './pin-list.component.html',
  styleUrl: './pin-list.component.scss'
})
export class PinListComponent {

  // @Input() searchTerm: string = '';

  pins = [
    { imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NzU4MzM3NTM&ixlib=rb-1.2.1&q=80&w=400', description: 'Beautiful Lake' },
    { imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1aWxkaW5nfGVufDB8fHx8MTY3NTgzMzgzMw&ixlib=rb-1.2.1&q=80&w=400', description: 'Modern Building' },
    { imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjc1ODMzOTEw&ixlib=rb-1.2.1&q=80&w=400', description: 'Delicious Pizza' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NzU4MzM3NTM&ixlib=rb-1.2.1&q=80&w=400', description: 'Beautiful Lake' },
    { imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1aWxkaW5nfGVufDB8fHx8MTY3NTgzMzgzMw&ixlib=rb-1.2.1&q=80&w=400', description: 'Modern Building' },
    { imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjc1ODMzOTEw&ixlib=rb-1.2.1&q=80&w=400', description: 'Delicious Pizza' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NzU4MzM3NTM&ixlib=rb-1.2.1&q=80&w=400', description: 'Beautiful Lake' },
    { imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1aWxkaW5nfGVufDB8fHx8MTY3NTgzMzgzMw&ixlib=rb-1.2.1&q=80&w=400', description: 'Modern Building' },
    { imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjc1ODMzOTEw&ixlib=rb-1.2.1&q=80&w=400', description: 'Delicious Pizza' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NzU4MzM3NTM&ixlib=rb-1.2.1&q=80&w=400', description: 'Beautiful Lake' },
    { imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1aWxkaW5nfGVufDB8fHx8MTY3NTgzMzgzMw&ixlib=rb-1.2.1&q=80&w=400', description: 'Modern Building' },
    { imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjc1ODMzOTEw&ixlib=rb-1.2.1&q=80&w=400', description: 'Delicious Pizza' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NzU4MzM3NTM&ixlib=rb-1.2.1&q=80&w=400', description: 'Beautiful Lake' },
    { imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1aWxkaW5nfGVufDB8fHx8MTY3NTgzMzgzMw&ixlib=rb-1.2.1&q=80&w=400', description: 'Modern Building' },
    { imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjc1ODMzOTEw&ixlib=rb-1.2.1&q=80&w=400', description: 'Delicious Pizza' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NzU4MzM3NTM&ixlib=rb-1.2.1&q=80&w=400', description: 'Beautiful Lake' },
    { imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1aWxkaW5nfGVufDB8fHx8MTY3NTgzMzgzMw&ixlib=rb-1.2.1&q=80&w=400', description: 'Modern Building' },
    { imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjc1ODMzOTEw&ixlib=rb-1.2.1&q=80&w=400', description: 'Delicious Pizza' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
    { imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTY3NTgzMzk4OQ&ixlib=rb-1.2.1&q=80&w=400', description: 'City at Night' },
  ];


  // get filteredPins() {
  //   return this.pins.filter(pin =>
  //     pin.description.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }
}

