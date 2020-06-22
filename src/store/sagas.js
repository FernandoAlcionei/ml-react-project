import { all } from 'redux-saga/effects';
import { productListSagas } from '../containers/product-list/sagas';
import { productDetailsSagas } from '../containers/product-details/sagas';

export default function* rootSaga() {
  yield all([
    ...productListSagas,
    ...productDetailsSagas,
  ]);
}
