import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Loader from '../components/Loader';
import { Colors } from '../components/ColorsAji/index';

import AlertContainer from '../containers/alerta/containers/AlertaContainer';
import HeaderContainer from '../containers/header/containers/HeaderContainer';

const ProductList = lazy(() => import('../containers/produtos/containers/ProdutosContainer'));
const ProductDetails = lazy(() => import('../containers/produto/containers/ProdutoContainer'));
const NotFoundContainer = lazy(() => import('../containers/not-found/containers/NotFoundContainer'));

const routes = [
  {
    key: 'products-list',
    path: '/',
    exact: true,
    component: ProductList,
  }, {
    key: 'product-details',
    path: '/product-details/:id',
    exact: true,
    component: ProductDetails,
  }, {
    key: 'not-found',
    path: '*',
    exact: true,
    component: NotFoundContainer,
  },
];

export const Routes = () => (
  <BrowserRouter>
    <div className="routes">
      <AlertContainer />

      <Suspense fallback={<Loader show background={Colors.whiteTransparent} color={Colors.grey} />}>
        <Route key="header" component={HeaderContainer} />

        <div className="wrap-routes">
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Suspense>
    </div>
  </BrowserRouter>
);
