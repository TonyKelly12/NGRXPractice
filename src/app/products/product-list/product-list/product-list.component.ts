import { Observable } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';


import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { Store, select } from '@ngrx/store';

import * as fromProduct from '../../state/index';
import * as productActions from '../../state/product.actions';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  products$: any;
  componentActive: boolean;
  errorMessage$: Observable<string>;


  constructor(
    private store: Store<fromProduct.State>,
    private productService: ProductService) { }

  ngOnInit(): void {
    // TODO: Unsubscribe
    this.store.pipe(select(fromProduct.getCurrentProduct)).subscribe(
      selectedProduct => this.selectedProduct = selectedProduct
    );
    // Listens for err ors
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    // Loads products into the store
    this.store.dispatch(new productActions.Load());
    // Listen to the store for changes
    this.products$ = this.store.pipe(select(fromProduct.getProducts));

    // this.productService.getProducts().subscribe(
    //   (products: Product[]) => this.products = products,
    //   (err: any) => this.errorMessage = err.error
    // );
      /** Code for accessing the store */
      // TODO: Unsubscribe
    this.store.pipe(select(fromProduct.ShowProductCode)).subscribe(
      showProductCode => this.displayCode = showProductCode
    );
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }

}
