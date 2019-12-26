import { Route, Switch } from 'react-router-dom';
import * as React from 'react';
import routes from './routesMap';
interface IRoutes {
  exact?: boolean;
  component: any;
  path: string;
}
const App = (_: any) => {
  return (
    <>
      <Switch>
        {routes.map((route: IRoutes) => {
          return (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </>
  );
};
export default App;
