import { IMenuItem } from "../menu/menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCartService {
  items: CartItem[] = [];

  addItem(item: IMenuItem) {
    let foundItem = this.items.find((cItem) => cItem.menuItem.id === item.id);

    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item, 1));
    }
  }

  clear() {
    this.items = [];
  }

  decreaseQty(item: CartItem): void {
    item.quantity--;
  }

  increaseQty(item: CartItem): void {
    item.quantity++;
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
