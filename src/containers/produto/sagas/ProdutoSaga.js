import { call, put } from 'redux-saga/effects';
import * as produtoActions from '../actions';
import * as alertaActions from '../../alerta/actions';
import mensagens from '../../../config/mensagens';

const { tipoMsg } = mensagens;

export function* infoProduto(api, { payload }) {
  const { id } = payload;

  yield put(produtoActions.loading(true));

  const response = yield call(api.getProduto, id);

  if (response && response.ok) {
    yield put(produtoActions.adicionaProduto(response.data));
    yield put(produtoActions.sagaListaDescricaoProduto(id));
  } else {
    yield put(alertaActions.adicionarAlerta(mensagens.servicoIndisponivel, tipoMsg.erro));
  }

  yield put(produtoActions.loading(false));
}

export function* listaDescricaoProduto(api, { payload }) {
  const { id } = payload;

  const response = yield call(api.getDescricaoProduto, id);

  if (response && response.ok) {
    yield put(produtoActions.adicionaDescricaoProduto(response.data));
  } else {
    yield put(alertaActions.adicionarAlerta(mensagens.servicoIndisponivel, tipoMsg.erro));
  }
}
