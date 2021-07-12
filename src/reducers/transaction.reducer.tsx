import {
  TRANSACTION_LIST_FAILED,
  TRANSACTION_LIST_REQUEST,
  TRANSACTION_LIST_SUCCESS,
  TRANSACTION_DETAIL_FAILED,
  TRANSACTION_DETAIL_REQUEST,
  TRANSACTION_DETAIL_SUCCESS,
  TRANSACTION_TRANSFER_FAILED,
  TRANSACTION_TRANSFER_REQUEST,
  TRANSACTION_TRANSFER_SUCCESS
} from "../actions/transaction.actions";
import TransactionDetails from "../pages/Transactions/TransactionDetails";

const initialState = {
  loading: false,
  data: [],
  count: null,
  transactionDetail: [],
  transactionTransfer: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data.results,
        count: action.data.count
      };

    case TRANSACTION_LIST_FAILED:
      return {
        ...state,
        loading: false
      };

    case TRANSACTION_DETAIL_FAILED:
      return {
        ...state,
        loading: false
      };

    case TRANSACTION_DETAIL_REQUEST:
      return {
        ...state,
        prevDetail: TransactionDetails,
        transactionDetail: action.data
      };

    case TRANSACTION_DETAIL_SUCCESS:
      return {
        ...state,
        prevDetail: TransactionDetails,
        transactionDetail: action.data
      };

    case TRANSACTION_TRANSFER_FAILED:
      return {
        ...state
      };

    case TRANSACTION_TRANSFER_REQUEST:
      return {
        ...state
      };

    case TRANSACTION_TRANSFER_SUCCESS:
      return {
        ...state,
        transactionTransfer: action.data.results
      };

    default:
      return state;
  }
};
