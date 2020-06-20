import { call, put } from 'redux-saga/effects';
import * as loginActions from '../actions';
import mensagens from '../../../config/mensagens';

export function* login(api, { payload }) {
  const { email, senha, history } = payload;

  if (!email.trim() || !senha.trim()) {
    yield put(loginActions.loginError(mensagens.login.invalido));
    return;
  }

  yield put(loginActions.loading(true));

  const response = yield call(api.login, email, senha);

  if (response && response.ok && response.data.token) {
    yield put(loginActions.limparReducer());
    yield call(history.replace, '/dashboard');
  } else if (response.status === 401) {
    yield put(loginActions.loginError(mensagens.login.invalido));
  } else {
    yield put(loginActions.loginError(mensagens.servicoIndisponivel));
  }
}
