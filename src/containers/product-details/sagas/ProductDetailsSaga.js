import { call, put } from 'redux-saga/effects';
import * as productDetailsActions from '../actions';
import * as alertActions from '../../alert/actions';
import { alertTypes } from '../../../components/Alert';

export function* getProductDetails(api, { payload }) {
  const { id, t } = payload;

  yield put(productDetailsActions.loading(true));

  const response = yield call(api.getProductDetails, id);

  if (response && response.ok) {
    const { item } = response.data;
    yield put(productDetailsActions.addProduct(item));
  } else {
    yield put(alertActions.addAlert(t('Servicio temporalmente no disponible'), alertTypes.error));
  }

  yield put(productDetailsActions.loading(false));
}

export function* buyProduct({ payload }) {
  const { t } = payload;
  yield put(alertActions.addAlert(t('Pago recibido con éxito'), alertTypes.success));
}
