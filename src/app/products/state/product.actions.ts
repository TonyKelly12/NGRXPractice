import { Product } from './../product';
import { Action } from '@ngrx/store';




// Define actions
export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success',
  UpdateProductFail = '[Product] Update Product Fail',
  CreateProduct = '[Product] Create Product',
  CreateProductSuccess = '[Product] Create Product Success',
  CreateProductFail = '[Product] Create Product Fail',
  DeleteProduct = '[Product] Delete Product',
  DeleteProductSuccess = '[Product] Delete Product Success',
  DeleteProductFail = '[Product] Delete Product Fail'
}

// Define Dragula actions

export enum ProductDragActionTypes {
  Drag = '[Dragula] Was lifted from source',
  DragEnd = '[Dragula] Dragging Events for element ended',
  Drop = '[Dragula] Element was dropped into Target',
  Cancel = '[Dragula] Element being dragged canceled',
  Remove = '[Dragula] Element was removed from DOM',
  Shadow = '[Dragula] The shadow was moved to container',
  Over = '[Dragula] Element is over container from origin src',
  Out = '[Dragula] Element was dragged out of container',
  Cloned = '[DOM Element was cloned]'
}

// Action Creators
// Creators for product list
export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) { }
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UpdateProductSuccess;

  constructor(public payload: Product) { }
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionTypes.UpdateProductFail;

  constructor(public payload: string) { }
}

export class CreateProduct implements Action {
  readonly type = ProductActionTypes.CreateProduct;

  constructor(public payload: Product) { }
}

export class CreateProductSuccess implements Action {
  readonly type = ProductActionTypes.CreateProductSuccess;

  constructor(public payload: Product) { }
}

export class CreateProductFail implements Action {
  readonly type = ProductActionTypes.CreateProductFail;

  constructor(public payload: string) { }
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DeleteProduct;

  constructor(public payload: number) { }
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DeleteProductSuccess;

  constructor(public payload: number) { }
}

export class DeleteProductFail implements Action {
  readonly type = ProductActionTypes.DeleteProductFail;

  constructor(public payload: string) { }
}

// Creators for Dragula

export class Drag implements Action {
  readonly type = ProductDragActionTypes.Drag;
  constructor(public payload: {}) {
}
}

export class DragEnd implements Action {
  readonly type = ProductDragActionTypes.DragEnd;
  constructor(public payload: {}) {}
}

export class Drop implements Action {
  readonly type = ProductDragActionTypes.Drop;
  constructor(public payload: {}) {}
}

export class Cancel implements Action {
  readonly type = ProductDragActionTypes.Cancel;
  constructor(public payload: {}) {}
}

export class Remove implements Action {
  readonly type = ProductDragActionTypes.Remove;
  constructor(public payload: {}) {}
}

export class Shadow implements Action {
  readonly type = ProductDragActionTypes.Shadow;
  constructor(public payload: {}) {}
}

export class Over implements Action {
  readonly type = ProductDragActionTypes.Over;
  constructor(public payload: {}) {}
}

export class Out implements Action {
  readonly type = ProductDragActionTypes.Out;
  constructor(public payload: {}) {}
}

export class Cloned implements Action {
  readonly type = ProductDragActionTypes.Cloned;
  constructor(public payload: {}) {}
}

// Union the valid types
export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail
  | CreateProduct
  | CreateProductSuccess
  | CreateProductFail
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductFail;

  export type ProductDragActions = Drag
  | DragEnd
  | Drop
  | Cancel
  | Remove
  | Shadow
  | Over
  | Out
  | Cloned;

