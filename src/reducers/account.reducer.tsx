import {
  ACCOUNT_LIST_FAILED,
  ACCOUNT_LIST_REQUEST,
  ACCOUNT_LIST_SUCCESS,
  ACCOUNT_DETAIL_FAILED,
  ACCOUNT_DETAIL_REQUEST,
  ACCOUNT_DETAIL_SUCCESS,
  ACCOUNT_TRANSFER_FAILED,
  ACCOUNT_TRANSFER_REQUEST,
  ACCOUNT_TRANSFER_SUCCESS
} from "../actions/account.actions";

const initialState = {
  loading: false,
  data: [],
  count: null,
  accountDetail: [],
  accountTransfer: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ACCOUNT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data.results,
        count: action.data.count
      };

    case ACCOUNT_LIST_FAILED:
      return {
        ...state,
        loading: false
      };

    case ACCOUNT_DETAIL_REQUEST:
      return {
        ...state
      };

    case ACCOUNT_DETAIL_SUCCESS:
      return {
        ...state,
        accountDetail: action.data
      };

    case ACCOUNT_DETAIL_FAILED:
      return {
        ...state,
        loading: false
      };

    case ACCOUNT_TRANSFER_REQUEST:
      return {
        ...state
      };

    case ACCOUNT_TRANSFER_SUCCESS:
      return {
        ...state,
        accountTransfer: action.data.results
      };

    case ACCOUNT_TRANSFER_FAILED:
      return {
        ...state
      };

    default:
      return state;
  }
};
