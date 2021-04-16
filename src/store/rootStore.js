import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import rootSaga from "./rootSagas";
import createSagaMiddleware from "redux-saga";
import history from "../history";
window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const sagaMiddleware = createSagaMiddleware();

const rootStore = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware, logger),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

sagaMiddleware.run(rootSaga);

export default rootStore;