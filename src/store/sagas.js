import { all } from 'redux-saga/effects';
import { productListSagas } from '../containers/produtos/sagas';
import { productDetailsSagas } from '../containers/produto/sagas';

export default function* rootSaga() {
  yield all([
    ...productListSagas,
    ...productDetailsSagas,
  ]);
}
