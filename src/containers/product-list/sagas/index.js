import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { listaProdutos } from './ProdutosSaga';
import Api from '../../../api';

const api = Api.create();

export const productListSagas = [
  takeLatest(types.SAGA_LISTA_PRODUTOS, listaProdutos, api),
];
