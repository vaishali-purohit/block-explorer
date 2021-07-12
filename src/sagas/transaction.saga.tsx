import { put, take, fork } from "redux-saga/effects";
import { getTransactionList } from "../actions/transaction.actions";
import { SET_LOAD } from "../actions/app.actions";

// import { REQUEST_TOKEN_SUCCESS } from "../actions/app.actions";
// import { ACCESS_TOKEN_PATH } from "../constants";

// export const getUserDetails = state => state.app;

function* fetchTransactionInfo() {
  // const accessToken = localStorage.getItem(ACCESS_TOKEN_PATH);
  // if (accessToken) {
  yield put(getTransactionList(1, false));
  // }
}

function* transactionSaga() {
  yield take(SET_LOAD);
  yield fork(fetchTransactionInfo);
}

export default transactionSaga;
