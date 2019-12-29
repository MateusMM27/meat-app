import { Component, OnInit } from '@angular/core';

import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );

    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      console.log(`Compra concluída ${orderId}`);
      this.orderService.clear();
    });
  }

  decreaseQty(item: CartItem): void {
    this.orderService.decreaseQty(item);
  }

  increaseQty(item: CartItem): void {
    this.orderService.increaseQty(item);
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  remove(item: CartItem): void {
    this.orderService.remove(item);
  }
}
