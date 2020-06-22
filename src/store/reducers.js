import * as produtosReducer from '../containers/produtos/reducers';
import * as produtoReducer from '../containers/produto/reducers';
import * as alertReducer from '../containers/alerta/reducers';

export default ({
  ...produtosReducer,
  ...produtoReducer,
  ...alertReducer,
});
