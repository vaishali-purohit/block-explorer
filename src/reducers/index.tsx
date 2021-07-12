import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import app from "./app.reducer";
import account from "./account.reducer";
import block from "./block.reducer";
import contract from "./contract.reducer";
import transaction from "./transaction.reducer";
import transfer from "./transfer.reducer";
import tokentap from "./tokentap.reducer";
import network from "./network.reducer";
import { CLEAR_STATE } from "../actions/app.actions";

const history = createBrowserHistory();

const appReducer = combineReducers({
  router: connectRouter(history),
  app,
  account,
  block,
  contract,
  transaction,
  transfer,
  tokentap,
  network
});

const createRootReducer = (state, action) => {
  // eslint-disable-next-line no-param-reassign
  if (action.type === CLEAR_STATE) state = undefined;
  return appReducer(state, action);
};

export default createRootReducer;
