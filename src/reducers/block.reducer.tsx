import {
  BLOCK_LIST_FAILED,
  BLOCK_LIST_REQUEST,
  BLOCK_LIST_SUCCESS,
  BLOCK_TRANSACTION_REQUEST,
  BLOCK_TRANSACTION_FAILED,
  BLOCK_TRANSACTION_SUCCESS,
  BLOCK_DETAIL_FAILED,
  BLOCK_DETAIL_REQUEST,
  BLOCK_DETAIL_SUCCESS
} from "../actions/block.actions";
import BlockDetails from "../pages/Blocks/BlockDetails";

const initialState = {
  loading: false,
  data: [],
  count: null,
  transactionCount: 0,
  transactionData: [],
  blockDetail: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BLOCK_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case BLOCK_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data.results,
        count: action.data.count
      };

    case BLOCK_LIST_FAILED:
      return {
        ...state,
        loading: false
      };

    case BLOCK_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true
      };

    case BLOCK_TRANSACTION_FAILED:
      return {
        ...state
      };

    case BLOCK_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactionCount: action.data.count,
        transactionData: action.data.results
      };

    case BLOCK_DETAIL_FAILED:
      return {
        ...state,
        loading: false
      };

    case BLOCK_DETAIL_REQUEST:
      return {
        ...state,
        prevDetail: BlockDetails,
        blockDetail: action.data
      };

    case BLOCK_DETAIL_SUCCESS:
      return {
        ...state,
        prevDetail: BlockDetails,
        blockDetail: action.data
      };

    default:
      return state;
  }
};
