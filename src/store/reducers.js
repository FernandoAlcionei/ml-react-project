import * as produtosReducer from '../containers/produtos/reducers';
import * as produtoReducer from '../containers/produto/reducers';
import * as alertaReducer from '../containers/alerta/reducers';

export default ({
  ...produtosReducer,
  ...produtoReducer,
  ...alertaReducer,
});
