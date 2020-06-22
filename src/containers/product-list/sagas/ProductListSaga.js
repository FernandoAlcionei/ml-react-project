import { call, put } from 'redux-saga/effects';
import * as productListActions from '../actions';
import * as alertActions from '../../alert/actions';
import { alertTypes } from '../../../components/Alert';

export function* getProductList(api, { payload }) {
  const { search, t } = payload;

  yield put(productListActions.loading(true));

  const response = yield call(api.getProductList, search);

  if (response && response.ok) {
    const { items } = response.data;

    yield put(productListActions.addProducts(items));
  } else {
    yield put(alertActions.addAlert(t('Servicio temporalmente no disponible'), alertTypes.error));
  }

  yield put(productListActions.loading(false));
}
