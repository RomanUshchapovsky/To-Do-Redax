import { put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../constants";
import { actions } from "./actions";


function* addNewTodo({ payload, callback }) {
  try {
    // Call to BE ->
    yield put(actions.CREATE_TODO.SUCCESS(payload));
  } catch (err) {
    yield put(actionTypes.FETCH_TODOS.FAILURE, err);
  } finally {
    callback && typeof callback === "function" && callback();
  }
}
function* removeTodo({ payload, callback }) {
  try {
    // console.log(payload)
    yield put(actions.REMOVE_TODO.SUCCESS(payload));
  } catch (err) {
    yield put(actionTypes.FETCH_TODOS.FAILURE, err);
  } finally {
    callback && typeof callback === "function" && callback();
  }
}
function* updateTodo({ payload, callback }) {
  try {
    yield put(actions.UPDATE_TODO.SUCCESS(payload));
  } catch (err) {
    yield put(actionTypes.FETCH_TODOSFAILURE, err);
  } finally {
    callback && typeof callback === "function" && callback();
  }
}


export default function* todosWatcher() {
  yield takeLatest(actionTypes.CREATE_TODO.REQUEST, addNewTodo);
  yield takeLatest(actionTypes.REMOVE_TODO.REQUEST, removeTodo);
  yield takeLatest(actionTypes.UPDATE_TODO.REQUEST, updateTodo);
}