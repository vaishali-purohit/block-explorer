import axios from "axios";
import { takeEvery, put, select } from "redux-saga/effects";
import { CALL_API } from "../actions/api.actions";
import config from "../config";
import { ACCESS_TOKEN_PATH } from "../constants";
import { showLoader, hideLoader } from "../actions/app.actions";

const identifyErrors = (status, body) => {
  if (status < 200 || status > 400) {
    throw new Error("Failed to fetch response from server");
  }

  if (body.error || body.errors) {
    throw new Error(body.error || body.errors);
  }
};

const getHeaders = (overrides = {}) => {
  const token = localStorage.getItem(ACCESS_TOKEN_PATH);
  return {
    "Content-Type": "application/json",
    authorization: token ? `Bearer ${token}` : null,
    ...overrides
  };
};

function* apiSaga(action) {
  const [request, success, failure] = action.types;
  const state = yield select();
  const Networks: any = JSON.parse(localStorage.getItem("Networks") || "[]");
  let link: any;

  if (state.network.selectedNetwork) {
    Networks.forEach(row => {
      if (row.name === state.network.selectedNetwork) link = row.url;
    });
  } else link = null;

  const requestUrl = `${config(link)}${action.endPoint}`;

  const requestBody = action.body || {};
  const requestConfig = {
    headers: getHeaders()
  };

  yield put({ type: request, body: requestBody });
  if (action.showLoader) {
    yield put(showLoader());
  }

  const args = ["get", "delete"].includes(action.method)
    ? [requestUrl, requestConfig]
    : [requestUrl, requestBody, requestConfig];

  try {
    const response = yield axios[action.method](...args);
    yield identifyErrors(response.status, response.data);
    const responseData = response.data.data || response.data;
    yield put({ type: success, data: responseData });
  } catch (error) {
    let payload = error;
    if (error.response && error.response.data) {
      payload = error.response.data;
    }

    // if (error.response && error.response.status === 401) {
    //   const refreshToken = localStorage.getItem(REFRESH_TOKEN_PATH);
    //   yield put(refreshAccessToken(refreshToken));
    //   yield fork(accountSaga);
    //   yield fork(blockSaga);
    //   yield fork(contractSaga);
    //   yield fork(transactionSaga);
    //   yield fork(transferSaga);
    // }

    yield put({ type: failure, payload });
  } finally {
    if (action.showLoader) {
      yield put(hideLoader());
    }
  }
}

export default function*() {
  yield takeEvery(CALL_API, apiSaga);
}
