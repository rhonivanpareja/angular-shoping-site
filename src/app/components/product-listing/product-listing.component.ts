import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

// import Swiper core and required modules
import SwiperCore, { Swiper, SwiperOptions, Navigation, A11y, Pagination } from 'swiper';

import { Products, SingleProduct } from 'src/app/interfaces/products';
import { ProductActions } from 'src/app/actions/product.actions';

SwiperCore.use([Navigation, Pagination, A11y]);

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})

export class ProductListingComponent implements OnInit {
  products: SingleProduct[] = [];
  
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor(private store: Store) { }

  @Select() products$!: Observable<Products>;
  getProducts() {
    this.store.dispatch(new ProductActions.GetProducts());
    this.products$.subscribe(returnData => {
      this.products = returnData.products;
    });
  }

  searchForProducts(searchText: string) {
    this.store.select(state => state.products).subscribe(data => {
      const prodsdata = [...data.products];
      this.products = prodsdata.filter(productsList => productsList.title.toLowerCase().includes(searchText.toLowerCase()))
    })
  }

  onSwiper(swiper: Swiper) {
    //console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
