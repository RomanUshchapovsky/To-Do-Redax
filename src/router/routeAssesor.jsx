import React from "react";
import { Route, Switch } from "react-router";

const routeAssessor = (parentRoutePath, route) => {
  const { component, exact, path } = route;

  const fullPath = parentRoutePath ? `${parentRoutePath}${path}` : path;

  if ({component}) {
    return (
      <Route 
        key={fullPath}
        path={fullPath}
        exact={exact}
        component={component}
      />
    );
  } else {
    return (
      <Switch >
        <Route
          key={fullPath}
          path={fullPath}
          exact={exact}
          component={component}
        />
      </Switch>
    );
  }
};

export default routeAssessor;
