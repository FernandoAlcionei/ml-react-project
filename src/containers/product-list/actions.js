import * as types from './actionTypes';

export function clearReducer() {
  return { type: types.CLEAR_REDUCER };
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

export function sagaProductList(search) {
  return {
    type: types.SAGA_PRODUCT_LIST,
    payload: { search },
  };
}
