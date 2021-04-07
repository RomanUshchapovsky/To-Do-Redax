import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import todos from "../containers/store";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    todosReducer: todos.reducers,
  });