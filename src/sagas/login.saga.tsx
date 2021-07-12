// import { takeEvery, select, delay } from "redux-saga/effects";
// import dayjs from "dayjs";
// import {
//   REQUEST_TOKEN_SUCCESS,
//   REFRESH_TOKEN_SUCCESS,
//   REQUEST_TOKEN_FAILED
// } from "../actions/app.actions";
// import {
//   ACCESS_TOKEN_PATH,
//   REFRESH_TOKEN_PATH,
//   VALID_TILL
// } from "../constants";

// export const getUserDetails = state => state.app;

// function* fetchTokenInfo() {
//   const userDetails = yield select(getUserDetails);
//   localStorage.setItem(ACCESS_TOKEN_PATH, userDetails.access);
//   localStorage.setItem(REFRESH_TOKEN_PATH, userDetails.refresh);
//   const validTill: any = dayjs()
//     .add(userDetails.expires_in, "second")
//     .valueOf();
//   localStorage.setItem(VALID_TILL, validTill);
// }

// function* updateTokens(action) {
//   const { accessToken, expiresIn } = action.data.result;
//   localStorage.setItem(ACCESS_TOKEN_PATH, accessToken);
//   const validTill: any = dayjs()
//     .add(expiresIn, "second")
//     .valueOf();
//   localStorage.setItem(VALID_TILL, validTill);
//   yield delay(100);
// }

// function* deleteTokenInfo() {
//   localStorage.clear();
//   yield delay(100);
// }

function* loginSaga() {
  //   yield takeEvery(REQUEST_TOKEN_SUCCESS, fetchTokenInfo);
  //   yield takeEvery(REQUEST_TOKEN_FAILED, deleteTokenInfo);
  //   yield takeEvery(REFRESH_TOKEN_SUCCESS, updateTokens);
}

export default loginSaga;
