import { put, take, fork } from "redux-saga/effects";
import { getBlockList } from "../actions/block.actions";
import { SET_LOAD } from "../actions/app.actions";

// import { REQUEST_TOKEN_SUCCESS } from "../actions/app.actions";
// import { ACCESS_TOKEN_PATH } from "../constants";

// export const getUserDetails = state => state.app;

function* fetchBlockInfo() {
  // const accessToken = localStorage.getItem(ACCESS_TOKEN_PATH);
  // if (accessToken) {
  yield put(getBlockList(1, false));
  // }
}

function* blockSaga() {
  yield take(SET_LOAD);
  yield fork(fetchBlockInfo);
}

export default blockSaga;
