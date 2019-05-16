import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurants/restaurants.service';
import { IRestaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html'
})
export class RestaurantDetailsComponent implements OnInit {

  restaurant: IRestaurant;

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoutes: ActivatedRoute
    ) { }

  ngOnInit() {
    this.restaurantService.restaurantById(
      this.activatedRoutes.snapshot.params['id']
    ).subscribe(restaurant => this.restaurant = restaurant);
  }

}
