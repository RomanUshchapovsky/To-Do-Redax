import { push } from 'connected-react-router'
import { put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../constants";
import { actions } from "./actions";


export function* signIn( payload, callback) {
  /* do something before redirection */
  try {
    yield put(actions.SIGN_IN.SUCCESS(payload));
    yield put(push('/Main'))
  } catch (err) {
    yield put(actionTypes.SIGN_IN.FAILURE, err);
  } finally {
    callback && typeof callback === "function" && callback();
  }
}
export function* signUp( payload, callback) {

}
export function* reset( payload, callback) {

}
export function* forgot( payload, callback) {

}
export function* activation( payload, callback) {

}


export default function* authWatcher() {
  yield takeLatest(actionTypes.SIGN_IN.REQUEST, signIn);
  yield takeLatest(actionTypes.SIGN_UP.REQUEST, signUp);
  yield takeLatest(actionTypes.RESET.REQUEST, reset);
  yield takeLatest(actionTypes.FORGOT.REQUEST, forgot);
  yield takeLatest(actionTypes.ACTIVATION.REQUEST, activation);
}