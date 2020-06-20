import * as loginReducer from '../containers/login/reducers';
import * as alertaReducer from '../containers/alerta/reducers';

export default ({
  ...loginReducer,
  ...alertaReducer,
});
