import React from 'react';
import { Switch } from 'react-router-dom';

import { privateRouter, publicRouter } from './router';
import routeAssessor from './router/routeAssesor';
import Main from './containers/components/Main/Main';
import SignIn from './containers/components/Auth/components/SignIn/SignIn';
import Auth from './containers/components/Auth/containers/Auth';
import SignUp from './containers/components/Auth/components/SignUp/SignUp';

const App = (history) => {
  return (
    // <Switch>
    //   <Auth>{publicRouter.map((route) => routeAssessor(null, route))}</Auth>
    //   <Main>{privateRouter().map((route) => routeAssessor(null, route))}</Main> 
    //    <Auth />
    // </Switch>
    // <Main />
    // <SignIn />
    <SignUp />
  );
};

export default App;


/* <ConnectedRouter history={history} noInitialPop>
  <Route path="/Main" component={Main} exact={true} />
</ConnectedRouter> */

