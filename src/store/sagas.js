import { all } from 'redux-saga/effects';
import { produtosSagas } from '../containers/produtos/sagas';

export default function* rootSaga() {
  yield all([
    ...produtosSagas,
  ]);
}
