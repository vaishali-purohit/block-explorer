import { CALL_API } from "./api.actions";

export const TRANSFER_LIST_REQUEST = "actions/transfer/TRANSFER_LIST_REQUEST";
export const TRANSFER_LIST_SUCCESS = "actions/transfer/TRANSFER_LIST_SUCCESS";
export const TRANSFER_LIST_FAILED = "actions/transfer/TRANSFER_LIST_FAILED";

export const getTransferList = (index, loader) => ({
  type: CALL_API,
  types: [TRANSFER_LIST_REQUEST, TRANSFER_LIST_SUCCESS, TRANSFER_LIST_FAILED],
  method: "get",
  endPoint: `api/v1/transfers/?page=${index}`,
  showLoader: loader
});

export const TRANSFER_DETAIL_REQUEST =
  "actions/transfer/TRANSFER_DETAIL_REQUEST";
export const TRANSFER_DETAIL_SUCCESS =
  "actions/transfer/TRANSFER_DETAIL_SUCCESS";
export const TRANSFER_DETAIL_FAILED = "actions/transfer/TRANSFER_DETAIL_FAILED";

export const getTransferDetail = (pk, loader) => ({
  type: CALL_API,
  types: [
    TRANSFER_DETAIL_REQUEST,
    TRANSFER_DETAIL_SUCCESS,
    TRANSFER_DETAIL_FAILED
  ],
  method: "get",
  endPoint: `api/v1/transfers/${pk}`,
  showLoader: loader
});
