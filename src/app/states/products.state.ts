import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from 'rxjs/operators';

import { Products } from '../interfaces/products';
import { ProductsService } from '../services/products.service';
import { ProductActions } from '../actions/product.actions';

@State<Products>({
  name: 'products',
  defaults: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0
  }
})
@Injectable()

export class ProductsState {
  constructor(private productsService: ProductsService) { }

  @Action(ProductActions.SearchProductData)
  getProductsData(ctx: Products) {
    return ctx;
  }

  @Action(ProductActions.GetProducts)
  getFetchDataToState(ctx: StateContext<Products>) {
    return this.productsService.getProducts().pipe(tap(returnData => {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        ...returnData //here the data coming from the API will get assigned to the users variable inside the appstate
      })
    }))
  }
}
