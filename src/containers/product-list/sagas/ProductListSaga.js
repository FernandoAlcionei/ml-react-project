import { call, put } from 'redux-saga/effects';
import * as productListActions from '../actions';
import * as alertActions from '../../alert/actions';
import messages from '../../../config/mensagens';

const { tipoMsg } = messages;

export function* getProductList(api, { payload }) {
  const { search } = payload;

  yield put(productListActions.loading(true));

  const response = yield call(api.getProductList, search);

  if (response && response.ok) {
    const { results } = response.data;

    yield put(productListActions.addProducts(results));
  } else {
    yield put(alertActions.addAlert(messages.servicoIndisponivel, tipoMsg.erro));
  }

  yield put(productListActions.loading(false));
}