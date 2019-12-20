import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IMenuItem } from './menu-item/menu-item.model';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menu: Observable<IMenuItem[]>

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private shoppingCartService: ShoppingCartService,
  ) { }

  ngOnInit() {
    this.menu = this.restaurantService.menuById(
      this.activatedRoute.parent.snapshot.params['id']
    )
  }

  addMenuItem(item: IMenuItem): void {
    this.shoppingCartService.addItem(item);
  }
}
