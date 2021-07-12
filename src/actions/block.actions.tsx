import { CALL_API } from "./api.actions";

export const BLOCK_LIST_REQUEST = "actions/block/BLOCK_LIST_REQUEST";
export const BLOCK_LIST_SUCCESS = "actions/block/BLOCK_LIST_SUCCESS";
export const BLOCK_LIST_FAILED = "actions/block/BLOCK_LIST_FAILED";

export const getBlockList = (index, loader) => ({
  type: CALL_API,
  types: [BLOCK_LIST_REQUEST, BLOCK_LIST_SUCCESS, BLOCK_LIST_FAILED],
  method: "get",
  endPoint: `api/v1/blocks/?page=${index}`,
  showLoader: loader
});

export const BLOCK_TRANSACTION_REQUEST =
  "actions/block/BLOCK_TRANSACTION_REQUEST";
export const BLOCK_TRANSACTION_SUCCESS =
  "actions/block/BLOCK_TRANSACTION_SUCCESS";
export const BLOCK_TRANSACTION_FAILED =
  "actions/block/BLOCK_TRANSACTION_FAILED";

export const getTransactionCount = (digest, loader) => ({
  type: CALL_API,
  types: [
    BLOCK_TRANSACTION_REQUEST,
    BLOCK_TRANSACTION_SUCCESS,
    BLOCK_TRANSACTION_FAILED
  ],
  method: "get",
  endPoint: `api/v1/blocks/${digest}/transactions`,
  showLoader: loader
});

export const BLOCK_DETAIL_REQUEST = "actions/block/BLOCK_DETAIL_REQUEST";
export const BLOCK_DETAIL_SUCCESS = "actions/block/BLOCK_DETAIL_SUCCESS";
export const BLOCK_DETAIL_FAILED = "actions/block/BLOCK_DETAIL_FAILED";

export const getBlockDetail = (digest, loader) => ({
  type: CALL_API,
  types: [BLOCK_DETAIL_REQUEST, BLOCK_DETAIL_SUCCESS, BLOCK_DETAIL_FAILED],
  method: "get",
  endPoint: `api/v1/blocks/${digest}`,
  showLoader: loader
});
