import React from 'react';
import { Route, Switch } from 'react-router'

// import { privateRouter, publicRouter } from './router';
// import routeAssessor from './router/routeAssesor';
// import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import SignIn from './containers/Auth/components/SignIn/SignIn';
import SignUp from './containers/Auth/components/SignUp/SignUp';
import ForgotPassword from './containers/Auth/components/ForgotPassword/ForgotPassword';
import ResetPassword from './containers/Auth/components/ResetPassword/ResetPassword';
import Activation from './containers/Auth/components/Activation/Activation';
import Converter from './containers/ConvertExcel/Excel-Json';


const App = (history) => {
  return (
    // <Switch>
    //   <Auth>{publicRouter.map((route) => routeAssessor(null, route))}</Auth>
    //   <Main>{privateRouter().map((route) => routeAssessor(null, route))}</Main> 
    // </Switch>
    // -----------------------------------------------------------------------
    <>
      <Switch>
        <Route path="/" exact={true} component={SignIn} />
        <Route path="/Main" exact={true} component={Main} />
        <Route path="/converter" exact={true} component={Converter} />
        <Route path="/registration" exact={true} component={SignUp} />
        <Route path="/forgot-password" exact={true} component={ForgotPassword} />
        <Route path="/reset-password" exact={true} component={ResetPassword} />
        <Route path="/activation" exact={true} component={Activation} />
      </Switch>
    </>
  );
};

export default App;