import { IMenuItem } from "../menu/menu-item/menu-item.model";

export class CartItem {
  constructor(public menuItem: IMenuItem, public quantity: number) {}

  value() {
    return this.menuItem.price * this.quantity;
  }
}