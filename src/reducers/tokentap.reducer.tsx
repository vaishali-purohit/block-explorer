import {
  REQUEST_TOKENTAP_FAILED,
  REQUEST_TOKENTAP_REQUEST,
  REQUEST_TOKENTAP_SUCCESS,
  REQUEST_SENDTOKEN_FAILED,
  REQUEST_SENDTOKEN_SUCCESS,
  REQUEST_SENDTOKEN_REQUEST,
  REQUEST_SENDTOKENSTATUS_SUCCESS
} from "../actions/tokentap.actions";

const initialState = {
  loading: false,
  tokenTap: null,
  digest: null,
  status: null,
  errorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TOKENTAP_REQUEST:
      return {
        ...state,
        loading: true
      };

    case REQUEST_TOKENTAP_SUCCESS:
      return {
        ...state,
        loading: false,
        tokenTap: action.data.tokenTap
      };

    case REQUEST_TOKENTAP_FAILED:
      return {
        ...state,
        loading: false
      };

    case REQUEST_SENDTOKEN_REQUEST:
      return {
        ...state
      };

    case REQUEST_SENDTOKEN_SUCCESS:
      return {
        ...state,
        digest: action.data.digest,
        errorMessage: action.data.error_messgae
      };

    case REQUEST_SENDTOKEN_FAILED:
      return {
        ...state
      };

    case REQUEST_SENDTOKENSTATUS_SUCCESS:
      return {
        ...state,
        status: action.data.status
      };

    default:
      return state;
  }
};
