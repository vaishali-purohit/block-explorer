import { put, take, fork } from "redux-saga/effects";
import { getAccountList } from "../actions/account.actions";
import { SET_LOAD } from "../actions/app.actions";

// import { REQUEST_TOKEN_SUCCESS } from "../actions/app.actions";
// import { ACCESS_TOKEN_PATH } from "../constants";

// export const getUserDetails = state => state.app;

function* fetchAccountInfo() {
  // const accessToken = localStorage.getItem(ACCESS_TOKEN_PATH);
  // if (accessToken) {
  yield put(getAccountList(1, false));
  // }
}

function* accountSaga() {
  yield take(SET_LOAD);
  yield fork(fetchAccountInfo);
}

export default accountSaga;
