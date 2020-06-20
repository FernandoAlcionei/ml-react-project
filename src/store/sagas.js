import { all } from 'redux-saga/effects';
import { loginSagas } from '../containers/login/sagas';

export default function* rootSaga() {
  yield all([
    ...loginSagas,
  ]);
}
