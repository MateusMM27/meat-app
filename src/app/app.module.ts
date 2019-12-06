import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './shared/input/input.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { MenuItemComponent } from './restaurant-details/menu/menu-item/menu-item.component';
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { RadioComponent } from './shared/radio/radio.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantService } from './restaurants/restaurant.service';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { ShoppingCartComponent } from './restaurant-details/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './restaurant-details/shopping-cart/shopping-cart.service';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InputComponent,
    MenuComponent,
    MenuItemComponent,
    OrderComponent,
    OrderItemsComponent,
    RadioComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantsComponent,
    ReviewsComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    RestaurantService,
    ShoppingCartService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
