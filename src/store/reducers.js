import * as produtosReducer from '../containers/produtos/reducers';
import * as alertaReducer from '../containers/alerta/reducers';

export default ({
  ...produtosReducer,
  ...alertaReducer,
});
