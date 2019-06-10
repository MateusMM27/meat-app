import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IMenuItem } from './menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<IMenuItem[]>

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantService.menuById(
      this.activatedRoute.parent.snapshot.params['id']
    )
  }

  addMenuItem(item: IMenuItem): void {
    console.log(item);
  }

}
