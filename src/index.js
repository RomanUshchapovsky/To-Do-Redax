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
    <ContextContainer>
      <React.StrictMode>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </React.StrictMode>
    </ContextContainer>
  </Provider>,
  document.getElementById("root")
);