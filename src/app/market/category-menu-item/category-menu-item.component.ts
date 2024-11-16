import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrl: './category-menu-item.component.css'
})
export class CategoryMenuItemComponent {
  @Input() categoryName!: string;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
