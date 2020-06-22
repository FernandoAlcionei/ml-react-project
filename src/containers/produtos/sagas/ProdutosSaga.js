import { call, put } from 'redux-saga/effects';
import * as produtosActions from '../actions';
import * as alertaActions from '../../alerta/actions';
import mensagens from '../../../config/mensagens';

const { tipoMsg } = mensagens;

export function* listaProdutos(api, { payload }) {
  const { busca } = payload;

  yield put(produtosActions.loading(true));

  const response = yield call(api.getProductsList, busca);

  if (response && response.ok) {
    const { results } = response.data;

    yield put(produtosActions.adicionaProdutos(results));
  } else {
    yield put(alertaActions.adicionarAlerta(mensagens.servicoIndisponivel, tipoMsg.erro));
  }

  yield put(produtosActions.loading(false));
}
