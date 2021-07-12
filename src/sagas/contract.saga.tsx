import { put, take, fork } from "redux-saga/effects";
import { getContractList } from "../actions/contract.actions";
import { SET_LOAD } from "../actions/app.actions";

// import { REQUEST_TOKEN_SUCCESS } from "../actions/app.actions";
// import { ACCESS_TOKEN_PATH } from "../constants";

// export const getUserDetails = state => state.app;

function* fetchContractInfo() {
  // const accessToken = localStorage.getItem(ACCESS_TOKEN_PATH);
  // if (accessToken) {
  yield put(getContractList(1, false));
  // }
}

function* contractSaga() {
  yield take(SET_LOAD);
  yield fork(fetchContractInfo);
}

export default contractSaga;
