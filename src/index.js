import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/rootStore";
import history from "./history";
import { ContextContainer } from "./Context/ContextContainer";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ContextContainer>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ContextContainer>
    </ConnectedRouter>
  </Provider >,
  document.getElementById("root")
);