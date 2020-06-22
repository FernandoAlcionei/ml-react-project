import * as types from './actionTypes';

export function sagaProductDetails(id) {
  return {
    type: types.SAGA_PRODUCT_DETAILS,
    payload: { id },
  };
}

export function sagaBuyProduct(id) {
  return {
    type: types.SAGA_BUY_PRODUCT,
    payload: { id },
  };
}

export function loading(loadingView) {
  return {
    type: types.LOADING,
    payload: { loading: loadingView },
  };
}

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    payload: { product },
  };
}

export function sagaProductDescriptions(id) {
  return {
    type: types.SAGA_PRODUCT_DESCRIPTIONS,
    payload: { id },
  };
}

export function addProductDescriptions(descriptions) {
  return {
    type: types.ADD_PRODUCT_DESCRIPTIONS,
    payload: { descriptions },
  };
}
