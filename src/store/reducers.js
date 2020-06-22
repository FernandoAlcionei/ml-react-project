import * as productListReducer from '../containers/produtos/reducers';
import * as productDetailsReducer from '../containers/produto/reducers';
import * as alertReducer from '../containers/alerta/reducers';

export default ({
  ...productListReducer,
  ...productDetailsReducer,
  ...alertReducer,
});
