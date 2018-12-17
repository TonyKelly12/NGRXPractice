import { DragulaModule } from 'ng2-dragula';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShellComponent } from './product-shell/product-shell/product-shell.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit/product-edit.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import {ProductReducer} from './state/product.reducer';
import { ProductEffects } from './state/product.effects';

// Dragula

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', ProductReducer),
    EffectsModule.forFeature([ProductEffects]),
    DragulaModule
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent
  ]
})
export class ProductsModule { }
