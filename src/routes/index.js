import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Loader from '../components/Loader';
import AlertaContainer from '../containers/alerta/containers/AlertaContainer';
import { Colors } from '../components/ColorsAji/index';

const LoginContainer = lazy(() => import('../containers/login/containers/LoginContainer'));

const routes = [
  {
    key: 'login',
    path: '/',
    exact: true,
    component: LoginContainer,
  }, {
    key: 'not-found',
    path: '*',
    exact: true,
    component: () => <div>Page 404!</div>,
  },
];

export const Routes = () => (
  <BrowserRouter>
    <div className="wrap-routes">
      <AlertaContainer />

      <Suspense fallback={<Loader show background={Colors.whiteTransparent} color={Colors.grey} />}>
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
      </Suspense>
    </div>
  </BrowserRouter>
);
