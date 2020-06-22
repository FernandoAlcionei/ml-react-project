import * as productListReducer from '../containers/produtos/reducers';
import * as productDetailsReducer from '../containers/product-details/reducers';
import * as alertReducer from '../containers/alert/reducers';

export default ({
  ...productListReducer,
  ...productDetailsReducer,
  ...alertReducer,
});
