import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IRestaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

/*
  Para classes de serviço que receberam outro serviço, é necessário importar
  o decorator @Injectable().
*/
@Injectable()

export class RestaurantService {

  constructor(private http: Http) {}

  restaurants(): Observable<IRestaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<IRestaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantReviews(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  menuById(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}