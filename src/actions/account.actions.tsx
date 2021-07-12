import { CALL_API } from "./api.actions";

export const ACCOUNT_LIST_REQUEST = "actions/account/ACCOUNT_LIST_REQUEST";
export const ACCOUNT_LIST_SUCCESS = "actions/account/ACCOUNT_LIST_SUCCESS";
export const ACCOUNT_LIST_FAILED = "actions/account/ACCOUNT_LIST_FAILED";

export const getAccountList = (index, loader) => ({
  type: CALL_API,
  types: [ACCOUNT_LIST_REQUEST, ACCOUNT_LIST_SUCCESS, ACCOUNT_LIST_FAILED],
  method: "get",
  endPoint: `api/v1/accounts/?page=${index}`,
  showLoader: loader
});

export const ACCOUNT_DETAIL_REQUEST = "actions/account/ACCOUNT_DETAIL_REQUEST";
export const ACCOUNT_DETAIL_SUCCESS = "actions/account/ACCOUNT_DETAIL_SUCCESS";
export const ACCOUNT_DETAIL_FAILED = "actions/account/ACCOUNT_DETAIL_FAILED";

export const getAccountDetail = (address, loader) => ({
  type: CALL_API,
  types: [
    ACCOUNT_DETAIL_REQUEST,
    ACCOUNT_DETAIL_SUCCESS,
    ACCOUNT_DETAIL_FAILED
  ],
  method: "get",
  endPoint: `api/v1/accounts/${address}`,
  showLoader: loader
});

export const ACCOUNT_TRANSFER_REQUEST =
  "actions/account/ACCOUNT_TRANSFER_REQUEST";
export const ACCOUNT_TRANSFER_SUCCESS =
  "actions/account/ACCOUNT_TRANSFER_SUCCESS";
export const ACCOUNT_TRANSFER_FAILED =
  "actions/account/ACCOUNT_TRANSFER_FAILED";

export const getAccountTransfer = (address, loader) => ({
  type: CALL_API,
  types: [
    ACCOUNT_TRANSFER_REQUEST,
    ACCOUNT_TRANSFER_SUCCESS,
    ACCOUNT_TRANSFER_FAILED
  ],
  method: "get",
  endPoint: `api/v1/accounts/${address}/transfers`,
  showLoader: loader
});
