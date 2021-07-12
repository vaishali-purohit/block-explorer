import { CALL_API } from "./api.actions";

export const TRANSACTION_LIST_REQUEST =
  "actions/transaction/TRANSACTION_LIST_REQUEST";
export const TRANSACTION_LIST_SUCCESS =
  "actions/transaction/TRANSACTION_LIST_SUCCESS";
export const TRANSACTION_LIST_FAILED =
  "actions/transaction/TRANSACTION_LIST_FAILED";

export const getTransactionList = (index, loader) => ({
  type: CALL_API,
  types: [
    TRANSACTION_LIST_REQUEST,
    TRANSACTION_LIST_SUCCESS,
    TRANSACTION_LIST_FAILED
  ],
  method: "get",
  endPoint: `api/v1/transactions/?page=${index}`,
  showLoader: loader
});

export const TRANSACTION_DETAIL_REQUEST =
  "actions/transaction/TRANSACTION_DETAIL_REQUEST";
export const TRANSACTION_DETAIL_SUCCESS =
  "actions/transaction/TRANSACTION_DETAIL_SUCCESS";
export const TRANSACTION_DETAIL_FAILED =
  "actions/transaction/TRANSACTION_DETAIL_FAILED";

export const getTransactionDetail = (digest, loader) => ({
  type: CALL_API,
  types: [
    TRANSACTION_DETAIL_REQUEST,
    TRANSACTION_DETAIL_SUCCESS,
    TRANSACTION_DETAIL_FAILED
  ],
  method: "get",
  endPoint: `api/v1/transactions/${digest}`,
  showLoader: loader
});

export const TRANSACTION_TRANSFER_REQUEST =
  "actions/transaction/TRANSACTION_TRANSFER_REQUEST";
export const TRANSACTION_TRANSFER_SUCCESS =
  "actions/transaction/TRANSACTION_TRANSFER_SUCCESS";
export const TRANSACTION_TRANSFER_FAILED =
  "actions/transaction/TRANSACTION_TRANSFER_FAILED";

export const getTransactionTransfer = (digest, loader) => ({
  type: CALL_API,
  types: [
    TRANSACTION_TRANSFER_REQUEST,
    TRANSACTION_TRANSFER_SUCCESS,
    TRANSACTION_TRANSFER_FAILED
  ],
  method: "get",
  endPoint: `api/v1/transactions/${digest}/transfers`,
  showLoader: loader
});
