import {
  TRANSFER_LIST_FAILED,
  TRANSFER_LIST_REQUEST,
  TRANSFER_LIST_SUCCESS,
  TRANSFER_DETAIL_FAILED,
  TRANSFER_DETAIL_REQUEST,
  TRANSFER_DETAIL_SUCCESS
} from "../actions/transfer.actions";

const initialState = {
  loading: false,
  data: [],
  count: null,
  transferDetail: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRANSFER_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case TRANSFER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data.results,
        count: action.data.count
      };

    case TRANSFER_LIST_FAILED:
      return {
        ...state,
        loading: false
      };

    case TRANSFER_DETAIL_REQUEST:
      return {
        ...state
      };

    case TRANSFER_DETAIL_SUCCESS:
      return {
        ...state,
        transferDetail: action.data
      };

    case TRANSFER_DETAIL_FAILED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
