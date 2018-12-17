
import { ProductActions, ProductActionTypes, SetCurrentProduct } from './product.actions';
import { Product } from './../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  products: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  currentProductID: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductID: null,
  products: [],
  error: ''
};

// Creating selectors
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const ShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProductID = createSelector(
  getProductFeatureState,
  state => state.currentProductID
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductID,
  (state, currentProductID) => {
    if (currentProductID === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
      };
    } else {
      return currentProductID ? state.products.find(p => p.id === currentProductID ) : null;
    }
  }
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error
);

// Create a Reducer
export function ProductReducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {

    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };

    case ProductActionTypes.SetCurrentProduct:
      return{
        ...state,
        currentProductID: action.payload.id
      };

    case ProductActionTypes.ClearCurrentProduct:
    return {
      ...state,
      currentProductID: null
    };

    case ProductActionTypes.InitializeCurrentProduct:
    return {
      ...state,
      currentProductID: 0
    };

    case ProductActionTypes.LoadSuccess:
    return {
      ...state,
      products: action.payload,
      error: ''
    };

    case ProductActionTypes.LoadFail:
    return{
      ...state,
      products: [],
      error: action.payload
    };

    default:
      return state;
  }
}
