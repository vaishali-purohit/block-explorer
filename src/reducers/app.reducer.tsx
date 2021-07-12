import {
  //   REQUEST_TOKEN_REQUEST,
  //   REQUEST_TOKEN_SUCCESS,
  //   REQUEST_TOKEN_FAILED,
  //   REFRESH_TOKEN_SUCCESS,
  //   SET_TOKENS
  SET_LOAD,
  SHOW_LOADER,
  HIDE_LOADER,
  CLEAR_STATE,
  LATEST_DETAILS_SUCCESS,
  LATEST_DETAILS_REQUEST,
  LATEST_DETAILS_FAILED
} from "../actions/app.actions";

const initialState = {
  //   refresh: null,
  //   access: null,
  //   loading: false,
  //   error: null,
  //   isSuccess: null
  isLoad: false,
  loader: {
    open: false,
    title: undefined
  },
  loading: false,
  latestBlock: [],
  latestTransfers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    //     case REQUEST_TOKEN_REQUEST:
    //       return {
    //         ...state,
    //         loading: true
    //       };

    //     case REQUEST_TOKEN_SUCCESS:
    //       return {
    //         ...state,
    //         loading: false,
    //         error: null,
    //         isSuccess: true,
    //         refresh: action.data.refresh,
    //         access: action.data.access
    //       };

    //     case REFRESH_TOKEN_SUCCESS:
    //       return {
    //         ...state,
    //         access: action.data.access
    //       };

    //     case REQUEST_TOKEN_FAILED:
    //       return {
    //         ...state,
    //         loading: false,
    //         error: action.payload,
    //         refresh: initialState.refresh,
    //         access: initialState.access
    //       };

    //     case SET_TOKENS:
    //       return {
    //         ...state,
    //         access: action.access,
    //         refresh: action.refresh
    //       };

    case SET_LOAD:
      return {
        ...state,
        isLoad: action.value
      };

    case SHOW_LOADER:
      return {
        ...state,
        loader: {
          titie: action.payload,
          open: true
        }
      };

    case HIDE_LOADER:
      return {
        ...state,
        loader: initialState.loader
      };

    case LATEST_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        latestBlock: action.data.latest_blocks,
        latestTransfers: action.data.latest_transfers
      };

    case LATEST_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case LATEST_DETAILS_FAILED:
      return {
        ...state
      };

    case CLEAR_STATE:
      return null;

    default:
      return state;
  }
};
