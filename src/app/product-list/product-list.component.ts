import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Products</h2>
    <ul class="product-list">
      <li *ngFor="let p of products" class="product">
        <img [src]="p.image" [alt]="p.name" />
        <div>
          <a [routerLink]="['/products', p.id]">{{ p.name }}</a>
          <p>\${{ p.price }}</p>
        </div>
      </li>
    </ul>
  `,
  styles: [`
    .product-list { list-style: none; padding: 0; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
    .product { border: 1px solid #ddd; padding: 1rem; border-radius: 8px; text-align: center; }
    .product img { max-width: 100%; height: 120px; object-fit: cover; }
  `]
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Widget', price: 9.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Gadget', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Thingamajig', price: 29.99, image: 'https://via.placeholder.com/150' }
  ];
}
