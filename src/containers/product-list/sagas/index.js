import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { getProductList } from './ProductListSaga';
import Api from '../../../api';

const api = Api.create();

export const productListSagas = [
  takeLatest(types.SAGA_PRODUCT_LIST, getProductList, api),
];
