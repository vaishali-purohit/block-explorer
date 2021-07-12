import { take, put, fork } from "redux-saga/effects";
import { getNetworkTap } from "../actions/networktap.actions";
import { SET_LOAD } from "../actions/app.actions";

// import { REQUEST_TOKEN_SUCCESS } from "../actions/app.actions";
// import { ACCESS_TOKEN_PATH } from "../constants";

function* fetchTokenInfo() {
  // const accessToken = localStorage.getItem(ACCESS_TOKEN_PATH);
  // if (accessToken) {
  yield put(getNetworkTap());
  // }
}

function* networktapSaga() {
  yield take(SET_LOAD);
  yield fork(fetchTokenInfo);
}

export default networktapSaga;
