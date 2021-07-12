import {
  CONTRACT_LIST_FAILED,
  CONTRACT_LIST_REQUEST,
  CONTRACT_LIST_SUCCESS,
  CONTRACT_DETAIL_FAILED,
  CONTRACT_DETAIL_REQUEST,
  CONTRACT_DETAIL_SUCCESS,
  CONTRACT_TRANSACTION_FAILED,
  CONTRACT_TRANSACTION_REQUEST,
  CONTRACT_TRANSACTION_SUCCESS
} from "../actions/contract.actions";

const initialState = {
  loading: false,
  data: [],
  count: null,
  contractDetail: [],
  contractTransactionCount: null,
  contractTransaction: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTRACT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case CONTRACT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data.results,
        count: action.data.count
      };

    case CONTRACT_LIST_FAILED:
      return {
        ...state,
        loading: false
      };

    case CONTRACT_DETAIL_REQUEST:
      return {
        ...state
      };

    case CONTRACT_DETAIL_SUCCESS:
      return {
        ...state,
        contractDetail: action.data[0]
      };

    case CONTRACT_DETAIL_FAILED:
      return {
        ...state,
        loading: false
      };

    case CONTRACT_TRANSACTION_REQUEST:
      return {
        ...state
      };

    case CONTRACT_TRANSACTION_SUCCESS:
      return {
        ...state,
        contractTransaction: action.data.results,
        contractTransactionCount: action.data.count
      };

    case CONTRACT_TRANSACTION_FAILED:
      return {
        ...state
      };

    default:
      return state;
  }
};
