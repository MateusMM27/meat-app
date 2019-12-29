import "rxjs/add/operator/map";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { MEAT_API } from "app/app.api";
import { Order } from "./order.model";
import { ShoppingCartService } from "app/restaurant-details/shopping-cart/shopping-cart.service";

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartService,
    private http: Http,
  ) { }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers;
    headers.append('Content-Type', 'application/json');

    return this.http.post(
      `${ MEAT_API }/orders`,
      JSON.stringify(order),
      new RequestOptions({ headers: headers }))
      .map(response => response.json());
  }

  clear(): void {
    this.cartService.clear();
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

  itemsValue(): number {
    return this.cartService.total();
  }

  remove(item: CartItem): void {
    this.cartService.removeItem(item);
  }
}
