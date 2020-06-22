import { call, put } from 'redux-saga/effects';
import * as productDetailsActions from '../actions';
import * as alertActions from '../../alert/actions';
import notifications from '../../../config/notifications';

const { typeNotification } = notifications;

export function* getProductDetails(api, { payload }) {
  const { id } = payload;

  yield put(productDetailsActions.loading(true));

  const response = yield call(api.getProductDetails, id);

  if (response && response.ok) {
    const { item } = response.data;
    yield put(productDetailsActions.addProduct(item));
  } else {
    yield put(alertActions.addAlert(notifications.unavailableService, typeNotification.error));
  }

  yield put(productDetailsActions.loading(false));
}

export function* buyProduct() {
  yield put(alertActions.addAlert(notifications.paymenReceived, typeNotification.success));
}
