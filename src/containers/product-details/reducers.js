import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = {
  loadingView: false,
  product: {},
  productDescriptions: [],
};

const loading = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingView: action.payload.loading,
});

const addProduct = (state = INITIAL_STATE, action) => ({
  ...state,
  product: action.payload.product,
});

const addProductDescriptions = (state = INITIAL_STATE, action) => ({
  ...state,
  productDescriptions: action.payload.descriptions,
});

export const productDetailsReducer = createReducer(INITIAL_STATE, {
  [types.LOADING]: loading,
  [types.ADD_PRODUCT]: addProduct,
  [types.ADD_PRODUCT_DESCRIPTIONS]: addProductDescriptions,
});
