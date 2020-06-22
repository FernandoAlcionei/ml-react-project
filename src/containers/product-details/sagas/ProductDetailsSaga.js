import { call, put } from 'redux-saga/effects';
import * as productDetailsActions from '../actions';
import * as alertActions from '../../alert/actions';
import messages from '../../../config/mensagens';

const { tipoMsg } = messages;

export function* getProductDetails(api, { payload }) {
  const { id } = payload;

  yield put(productDetailsActions.loading(true));

  const response = yield call(api.getProductDetails, id);

  if (response && response.ok) {
    yield put(productDetailsActions.addProduct(response.data));
    yield put(productDetailsActions.sagaProductDescriptions(id));
  } else {
    yield put(alertActions.addAlert(messages.servicoIndisponivel, tipoMsg.erro));
  }

  yield put(productDetailsActions.loading(false));
}

export function* getProductDescriptions(api, { payload }) {
  const { id } = payload;

  const response = yield call(api.getProductDescriptions, id);

  if (response && response.ok) {
    yield put(productDetailsActions.addProductDescriptions(response.data));
  } else {
    yield put(alertActions.addAlert(messages.servicoIndisponivel, tipoMsg.erro));
  }
}

export function* buyProduct() {
  yield put(alertActions.addAlert(messages.paymentDone, tipoMsg.sucesso));
}
