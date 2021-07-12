import { CALL_API } from "./api.actions";

export const CONTRACT_LIST_REQUEST = "actions/contract/CONTRACT_LIST_REQUEST";
export const CONTRACT_LIST_SUCCESS = "actions/contract/CONTRACT_LIST_SUCCESS";
export const CONTRACT_LIST_FAILED = "actions/contract/CONTRACT_LIST_FAILED";

export const getContractList = (index, loader) => ({
  type: CALL_API,
  types: [CONTRACT_LIST_REQUEST, CONTRACT_LIST_SUCCESS, CONTRACT_LIST_FAILED],
  method: "get",
  endPoint: `api/v1/contracts/?page=${index}`,
  showLoader: loader
});

export const CONTRACT_DETAIL_REQUEST =
  "actions/contract/CONTRACT_DETAIL_REQUEST";
export const CONTRACT_DETAIL_SUCCESS =
  "actions/contract/CONTRACT_DETAIL_SUCCESS";
export const CONTRACT_DETAIL_FAILED = "actions/contract/CONTRACT_DETAIL_FAILED";

export const getContractDetail = (name, loader) => ({
  type: CALL_API,
  types: [
    CONTRACT_DETAIL_REQUEST,
    CONTRACT_DETAIL_SUCCESS,
    CONTRACT_DETAIL_FAILED
  ],
  method: "get",
  endPoint: `api/v1/contract/${name}`,
  showLoader: loader
});

export const CONTRACT_TRANSACTION_REQUEST =
  "actions/contract/CONTRACT_TRANSACTION_REQUEST";
export const CONTRACT_TRANSACTION_SUCCESS =
  "actions/contract/CONTRACT_TRANSACTION_SUCCESS";
export const CONTRACT_TRANSACTION_FAILED =
  "actions/contract/CONTRACT_TRANSACTION_FAILED";

export const getContractTransaction = (name, loader) => ({
  type: CALL_API,
  types: [
    CONTRACT_TRANSACTION_REQUEST,
    CONTRACT_TRANSACTION_SUCCESS,
    CONTRACT_TRANSACTION_FAILED
  ],
  method: "get",
  endPoint: `api/v1/contract/${name}/transactions`,
  showLoader: loader
});
