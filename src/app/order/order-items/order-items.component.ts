import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
})
export class OrderItemsComponent {
  @Input() items: CartItem[] = [];

  @Output() decrease = new EventEmitter<CartItem>();
  @Output() increase = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  emitDecreaseQty(item: CartItem): void {
    this.decrease.emit(item);
  }

  emitIncreaseQty(item: CartItem): void {
    this.increase.emit(item);
  }

  emitRemove(item: CartItem): void {
    this.remove.emit(item);
  }
}
