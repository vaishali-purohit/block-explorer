import { fork } from "redux-saga/effects";
import { sagaMiddleware } from "../store/configureStore";
import apiSaga from "./api.saga";

// import appSaga from "./app.saga";
// import loginSaga from "./login.saga";

import accountSaga from "./account.saga";
import blockSaga from "./block.saga";
import contractSaga from "./contract.saga";
import transactionSaga from "./transaction.saga";
import transferSaga from "./transfer.saga";
import tokentapSaga from "./tokentap.saga";
import networktapSaga from "./networktap.saga";

function* rootSaga() {
  yield fork(apiSaga);

  // yield fork(appSaga);
  // yield fork(loginSaga);
  yield fork(networktapSaga);
  yield fork(tokentapSaga);
  yield fork(accountSaga);
  yield fork(blockSaga);
  yield fork(contractSaga);
  yield fork(transactionSaga);
  yield fork(transferSaga);
}

const runSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default runSaga;
