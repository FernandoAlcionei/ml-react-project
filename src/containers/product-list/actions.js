import * as types from './actionTypes';

export function sagaProductList(search) {
  return {
    type: types.SAGA_PRODUCT_LIST,
    payload: { search },
  };
}

export function loading(loadingView) {
  return {
    type: types.LOADING,
    payload: { loading: loadingView },
  };
}

export function addProducts(products) {
  return {
    type: types.ADD_PRODUCTS,
    payload: { products },
  };
}
