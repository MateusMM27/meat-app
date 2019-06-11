import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addMenuItem(item: any): void {
    this.shoppingCartService.addItem(item);
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  removeItem(item: any): void {
    this.shoppingCartService.removeItem(item);
  }

  total(): number {
    return this.shoppingCartService.total();
  }
}
