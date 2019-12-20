import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IMenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
  @Input() menuItem: IMenuItem;
  @Output() add = new EventEmitter();

  emitAddEvent(): void {
    this.add.emit(this.menuItem);
  }
}
