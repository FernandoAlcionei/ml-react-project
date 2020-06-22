import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Loader from '../components/Loader';
import { Colors } from '../components/ColorsAji/index';

import AlertaContainer from '../containers/alerta/containers/AlertaContainer';
import HeaderContainer from '../containers/header/containers/HeaderContainer';

const ProdutosContainer = lazy(() => import('../containers/produtos/containers/ProdutosContainer'));
const ProdutoContainer = lazy(() => import('../containers/produto/containers/ProdutoContainer'));

const routes = [
  {
    key: 'produtos',
    path: '/',
    exact: true,
    component: ProdutosContainer,
  }, {
    key: 'produto',
    path: '/produto/:id',
    exact: true,
    component: ProdutoContainer,
  }, {
    key: 'not-found',
    path: '*',
    exact: true,
    component: () => <div>Page 404!</div>,
  },
];

export const Routes = () => (
  <BrowserRouter>
    <div className="routes">
      <AlertaContainer />

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
