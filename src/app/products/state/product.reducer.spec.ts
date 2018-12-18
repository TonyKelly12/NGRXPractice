import * as productActions from './product.actions';
import { reducers } from './../../reducers/index';
import { TestBed } from '@angular/core/testing';

import { ProductReducer } from './product.reducer';

describe('ProductReducer', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should change status of check box', () => {

    const currentState = true;
    const expectedResult = false;
    const action = new productActions.ToggleProductCode(currentState);
  });

});
