import {
  REQUEST_NETWORKTAP_FAILED,
  REQUEST_NETWORKTAP_REQUEST,
  REQUEST_NETWORKTAP_SUCCESS,
  SELECTED_NETWORK_SUCCESS
} from "../actions/networktap.actions";

const initialState = {
  loading: false,
  selectedNetwork: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NETWORKTAP_REQUEST:
      return {
        ...state,
        loading: true
      };

    case REQUEST_NETWORKTAP_SUCCESS:
      localStorage.setItem("Networks", JSON.stringify(action.data));

      return {
        ...state,
        loading: false
      };

    case REQUEST_NETWORKTAP_FAILED:
      return {
        ...state,
        loading: false
      };

    case SELECTED_NETWORK_SUCCESS:
      return {
        ...state,
        selectedNetwork: action.name
      };

    default:
      return state;
  }
};
