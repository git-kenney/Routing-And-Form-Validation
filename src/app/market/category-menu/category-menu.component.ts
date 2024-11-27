import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../products-page/products-page.component';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.css'
})
export class CategoryMenuComponent {
  @Input() categories!: Category[];
  @Output() categorySelected = new EventEmitter<Category>();

  onCategoryClicked(category: Category) {
    this.categorySelected.emit(category);
  }

}
