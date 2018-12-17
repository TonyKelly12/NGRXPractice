import { Product } from '../product';
import { ProductActionTypes, ProductActions, ProductDragActionTypes, ProductDragActions } from './product.actions';

// State for this feature (Product)
export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
  dragState: {};
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
  dragState: {}
};

export function ProductReducer(state = initialState, action: ProductActions | ProductDragActions): ProductState {

  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };

    case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProductId: action.payload.id
      };

    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null
      };

    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: 0
      };

    case ProductActionTypes.LoadSuccess:
      return {
        ...state,
        products: action.payload,
        error: ''
      };

    case ProductActionTypes.LoadFail:
      return {
        ...state,
        products: [],
        error: action.payload
      };

    case ProductActionTypes.UpdateProductSuccess:
      const updatedProducts = state.products.map(
        item => action.payload.id === item.id ? action.payload : item);
      return {
        ...state,
        products: updatedProducts,
        currentProductId: action.payload.id,
        error: ''
      };

    case ProductActionTypes.UpdateProductFail:
      return {
        ...state,
        error: action.payload
      };

    // After a create, the currentProduct is the new product.
    case ProductActionTypes.CreateProductSuccess:
      return {
        ...state,
        products: [...state.products, action.payload],
        currentProductId: action.payload.id,
        error: ''
      };

    case ProductActionTypes.CreateProductFail:
      return {
        ...state,
        error: action.payload
      };

    // After a delete, the currentProduct is null.
    case ProductActionTypes.DeleteProductSuccess:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
        currentProductId: null,
        error: ''
      };

    case ProductActionTypes.DeleteProductFail:
      return {
        ...state,
        error: action.payload
      };

      case ProductDragActionTypes.Drag:
      return {
        ...state,
        dragState: action.payload
      };

      case ProductDragActionTypes.DragEnd:
      return {
        ...state,
        dragState: action.payload
      };

      case ProductDragActionTypes.Drop:
      return {
        ...state,
        dragState: action.payload
      };

      case ProductDragActionTypes.Cancel:
      return {
        ...state,
        dragState: action.payload
      };

      case ProductDragActionTypes.Remove:
      return {
        ...state,
        dragState: action.payload
      };

      case ProductDragActionTypes.Shadow:
      return {
        ...state,
        dragState: action.payload
      };

      case ProductDragActionTypes.Over:
      return {
        ...state,
        dragState: action.payload
      };

      case ProductDragActionTypes.Out:
      return {
        ...state,
        dragState: action.payload
      };

      case ProductDragActionTypes.Cloned:
      return {
        ...state,
        dragState: action.payload
      };

    default:
      return state;
  }
}

