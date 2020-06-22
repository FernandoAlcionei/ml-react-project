import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { getProductDetails, getProductDescriptions, buyProduct } from './ProductDetailsSaga';
import Api from '../../../api';

const api = Api.create();

export const productDetailsSagas = [
  takeLatest(types.SAGA_PRODUCT_DETAILS, getProductDetails, api),
  takeLatest(types.SAGA_PRODUCT_DESCRIPTIONS, getProductDescriptions, api),
  takeLatest(types.SAGA_BUY_PRODUCT, buyProduct, api),
];
