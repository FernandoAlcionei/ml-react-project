import * as productListReducer from '../containers/product-list/reducers';
import * as productDetailsReducer from '../containers/product-details/reducers';
import * as alertReducer from '../containers/alert/reducers';

export default ({
  ...productListReducer,
  ...productDetailsReducer,
  ...alertReducer,
});
