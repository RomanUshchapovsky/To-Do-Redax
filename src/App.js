import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { privateRouter, publicRouter } from './router';
import routeAssessor from './router/routeAssesor';
import Main from './containers/Main/Main';
import SignIn from './containers/Auth/components/SignIn/SignIn';
import SignUp from './containers/Auth/components/SignUp/SignUp';
import ForgotPassword from './containers/Auth/components/ForgotPassword/ForgotPassword';
import ResetPassword from './containers/Auth/components/ResetPassword/ResetPassword';
import Activation from './containers/Auth/components/Activation/Activation';

const App = (history) => {
  return (
    // <Switch>
    //   <Auth>{publicRouter.map((route) => routeAssessor(null, route))}</Auth>
    //   <Main>{privateRouter().map((route) => routeAssessor(null, route))}</Main> 
    //    <Auth />
    // </Switch>

    <Switch>
      <Route path="/Main"  exact={true} component={Main} />
      <Route path="/login" exact={true} component={SignIn} />
      <Route path="/registration"  exact={true} component={SignUp} />
      <Route path="/forgot-password"  exact={true} component={ForgotPassword} />
      <Route path="/reset-password" exact={true} component={ResetPassword} />
      <Route path="/activation"  exact={true} component={Activation} />
    </Switch>
  );
};

export default App;