import { all } from 'redux-saga/effects';
import todos from '../containers/Todos/store';
import auth from '../containers/Auth/store';

export default function* rootSaga() {
  yield all([todos.sagas()], [auth.sagas()]);
}