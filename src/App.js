import React from "react";
import { Switch } from "react-router-dom";

// import { privateRouter, publicRouter } from "./router";
import routeAssessor from "./router/routeAssesor";
import Main from "./containers/components/Main/Main";
import SignIn from "./containers/components/Auth/components/SignIn/SignIn";

const App = () => {
  return (
    //   <Switch>
    //     <Main>
    //         {publicRouter.map(route => routeAssessor(null, route))}
    //         {privateRouter().map(route => routeAssessor(null, route))}
    //     </Main>
    //   </Switch>
    <Main />
    // <SignIngit />
  );
};
export default App;
