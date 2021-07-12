import { CALL_API } from "./api.actions";

export const REQUEST_NETWORKTAP_REQUEST =
  "actions/networktap/REQUEST_NETWORKTAP_REQUEST";
export const REQUEST_NETWORKTAP_SUCCESS =
  "actions/networktap/REQUEST_NETWORKTAP_SUCCESS";
export const REQUEST_NETWORKTAP_FAILED =
  "actions/networktap/REQUEST_NETWORKTAP_FAILED";

export const getNetworkTap = () => ({
  type: CALL_API,
  types: [
    REQUEST_NETWORKTAP_REQUEST,
    REQUEST_NETWORKTAP_SUCCESS,
    REQUEST_NETWORKTAP_FAILED
  ],
  method: "get",
  endPoint: "api/v1/networktap"
});

export const SELECTED_NETWORK_SUCCESS =
  "actions/networktap/SELECTED_NETWORK_SUCCESS";

export const getNetwork = name => ({
  type: SELECTED_NETWORK_SUCCESS,
  name
});
