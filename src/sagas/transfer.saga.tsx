import { put, take, fork } from "redux-saga/effects";
import { getTransferList } from "../actions/transfer.actions";
import { SET_LOAD } from "../actions/app.actions";

// import { REQUEST_TOKEN_SUCCESS } from "../actions/app.actions";
// import { ACCESS_TOKEN_PATH } from "../constants";

// export const getUserDetails = state => state.app;

function* fetchTransferInfo() {
  // const accessToken = localStorage.getItem(ACCESS_TOKEN_PATH);
  // if (accessToken) {
  yield put(getTransferList(1, false));
  // }
}

function* transferSaga() {
  yield take(SET_LOAD);
  yield fork(fetchTransferInfo);
}

export default transferSaga;
