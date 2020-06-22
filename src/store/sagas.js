import { all } from 'redux-saga/effects';
import { produtosSagas } from '../containers/produtos/sagas';
import { produtoSagas } from '../containers/produto/sagas';

export default function* rootSaga() {
  yield all([
    ...produtosSagas,
    ...produtoSagas,
  ]);
}
