import { all } from "redux-saga/effects";
import todos from "../containers/store";

export default function* rootSaga() {
  yield all([todos.sagas()]);
}