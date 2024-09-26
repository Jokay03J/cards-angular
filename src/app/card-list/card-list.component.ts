import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  articles = [
    {
      title: 'Produit 1',
      description: 'Courte description',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 2',
      description: 'Courte description',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 3',
      description: 'Courte description',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 4',
      description: 'Courte description',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 5',
      description: 'Courte description',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 6',
      description: 'Courte description',
      url: 'https://via.placeholder.com/150'
    }
  ]
}
