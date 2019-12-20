import { Injectable } from "@angular/core";

import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-details/shopping-cart/shopping-cart.service";

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartService
  ) { }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  decreaseQty(item: CartItem): void {
    this.cartService.decreaseQty(item);

    if(item.quantity == 0) {
      this.cartService.removeItem(item);
    }
  }

  increaseQty(item: CartItem): void {
    this.cartService.increaseQty(item);
  }

  remove(item: CartItem): void {
    this.cartService.removeItem(item);
  }
}
