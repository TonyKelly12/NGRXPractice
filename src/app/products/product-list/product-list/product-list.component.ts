import { Product } from './../../product';
import { Observable, Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';


import { ProductService } from '../../product.service';
import { Store, select } from '@ngrx/store';

import * as fromProduct from '../../state/index';
import * as productActions from '../../state/product.actions';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[] = [];

  dragProducts = 'ProductListComponent';
  subs = new Subscription();

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  products$: Observable<Product[]>;
  componentActive: boolean;
  errorMessage$: Observable<string>;

  // Dragula Options
  dragulaOptions: any = {
    removeOnSpill: true
  };

  constructor(
    private store: Store<fromProduct.State>,
    private productService: ProductService,
    private dragulaService: DragulaService
  ) {

    // Listen to the store for changes
    this.store.pipe(select(fromProduct.getProducts)).subscribe ( prods => {
      prods.forEach( product => this.products.push(product));
    });

    this.subs.add(
      this.dragulaService
        .drag(this.dragProducts)
        .subscribe(({ name, el, source }) => {
          console.log('Subscribed');
          console.log(name);
          console.log(el);
          console.log(source);
          const payload = {
            name: name,
            el: el,
            source: source
          };
          this.store.dispatch(new productActions.Drag(payload));
        })
    );

    this.subs.add(this.dragulaService.dragend('ProductListComponent').subscribe(({name, el}) => {
      const payload = {
        name: name,
        el: el,
      };
      this.store.dispatch(new productActions.DragEnd(payload));
    }));

    this.subs.add(this.dragulaService.dropModel('ProductListComponent').subscribe(({
      name, el, target, item, source, sourceModel, targetModel, sibling, sourceIndex, targetIndex}) => {
      const payload = {
        name: name,
        el: el,
        source: source,
        sibling: sibling,
        target: target,
        item: item,
        sourceModel: sourceModel,
        targetModel: targetModel,
        sourceIndex: sourceIndex,
        targetIndex: targetIndex

      };
      this.store.dispatch(new productActions.Drop(payload));
    }));

    this.subs.add(
      this.dragulaService.cancel('ProductListComponent').subscribe(({name, el, source, container }) => {
       const payload = {
         name: name,
         el: el,
         source: source,
         container: container
       };
       this.store.dispatch(new productActions.Cancel(payload));
     }));

     this.subs.add(
      this.dragulaService.removeModel('ProductListComponent').subscribe(({name, el, source, container, item, sourceModel, sourceIndex}) => {
       const payload = {
         name: name,
         el: el,
         source: source,
         container: container,
         item: item,
         sourceModel: sourceModel,
         sourceIndex: sourceIndex
       };
     }));

     this.subs.add(
      this.dragulaService.shadow('ProductListComponent').subscribe(({name, el, source, container}) => {
       const payload = {
         name: name,
         el: el,
         source: source,
         container: container
       };
     }));

     this.subs.add(
      this.dragulaService.over('ProductListComponent').subscribe(({name, el, source, container}) => {
       const payload = {
         name: name,
         el: el,
         source: source,
         container: container
       };
     }));

     this.subs.add(
      this.dragulaService.out('ProductListComponent').subscribe(({name, el, source, container}) => {
       const payload = {
         name: name,
         el: el,
         source: source,
         container: container
       };
     }));

     this.subs.add(
      this.dragulaService.cloned('ProductListComponent').subscribe(({name, clone, original, cloneType}) => {
       const payload = {
         name: name,
         clone: clone,
         original: original,
         cloneType: cloneType
       };
     }));
  }

  ngOnInit(): void {
    // TODO: Unsubscribe
    this.store
      .pipe(select(fromProduct.getCurrentProduct))
      .subscribe(selectedProduct => (this.selectedProduct = selectedProduct));
    // Listens for err ors
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    // Loads products into the store
    this.store.dispatch(new productActions.Load());


    // this.productService.getProducts().subscribe(
    //   (products: Product[]) => this.products = products,
    //   (err: any) => this.errorMessage = err.error
    // );
    /** Code for accessing the store */
    // TODO: Unsubscribe
    this.store
      .pipe(select(fromProduct.ShowProductCode))
      .subscribe(showProductCode => (this.displayCode = showProductCode));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
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
