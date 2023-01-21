import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private productUrl = 'https://dummyjson.com/products?limit=50';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products> {
    return this.http.get<Products>(this.productUrl);
  }
}
