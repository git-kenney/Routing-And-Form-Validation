import { Component } from '@angular/core';

export interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  categories: Category[] = [
    { id: 1, name: 'Naruto'},
    { id: 2, name: 'Jujutsu Kaisen'},
    { id: 3, name: 'Bleach'},
    { id: 4, name: 'Hunter x Hunter'},
    { id: 5, name: 'Attack on Titan'}
  ];

  onCategorySelected(category: Category) {
    alert(`You selected: ${category.name}`);
  }
}
