import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import todos from "../containers/Todos/store";
import auth from "../containers/Todos/store";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    todosReducer: todos.reducers,
    authReducer: auth.reducers,
  });