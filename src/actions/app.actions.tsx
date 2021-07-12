import { createAction } from "redux-actions";
import { CALL_API } from "./api.actions";

// export const REQUEST_TOKEN_REQUEST = "actions/app/REQUEST_TOKEN_REQUEST";
// export const REQUEST_TOKEN_SUCCESS = "actions/app/REQUEST_TOKEN_SUCCESS";
// export const REQUEST_TOKEN_FAILED = "actions/app/REQUEST_TOKEN_FAILED";

// export const getToken = (username, password) => ({
//   type: CALL_API,
//   types: [REQUEST_TOKEN_REQUEST, REQUEST_TOKEN_SUCCESS, REQUEST_TOKEN_FAILED],
//   method: "post",
//   endPoint: "api/v1/token",
//   body: {
//     username,
//     password
//   }
// });

// export const REFRESH_TOKEN_REQUEST = "actions/app/REFRESH_TOKEN_REQUEST";
// export const REFRESH_TOKEN_FAILED = "actions/app/REFRESH_TOKEN_FAILED";
// export const REFRESH_TOKEN_SUCCESS = "actions/app/REFRESH_TOKEN_SUCCESS";

// export const refreshAccessToken = refreshToken => ({
//   type: CALL_API,
//   types: [REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED],
//   method: "post",
//   endPoint: "api/v1/token/refresh",
//   body: {
//     refresh: refreshToken
//   }
// });

// export const SET_TOKENS = "actions/app/SET_TOKENS";

// export const setTokens = (accessToken, refreshToken) => ({
//   type: SET_TOKENS,
//   accessToken,
//   refreshToken
// });

// export const CHECK_REFRESH_TOKEN = "actions/app/CHECK_REFRESH_TOKEN";

// export const checkRefreshToken = (validTill, refreshToken) => ({
//   type: CHECK_REFRESH_TOKEN,
//   validTill,
//   refreshToken
// });

export const SET_LOAD = "actions/app/SET_LOAD";

export const setLoading = value => ({
  type: SET_LOAD,
  value
});

export const SHOW_LOADER = "actions/app/SHOW_LOADER";
export const HIDE_LOADER = "actions/app/HIDE_LOADER";

export const showLoader = createAction(SHOW_LOADER);
export const hideLoader = createAction(HIDE_LOADER);

export const CLEAR_STATE = "actions/app/CLEAR_STATE";
export const clearState = () => ({
  type: CLEAR_STATE
});

export const LATEST_DETAILS_REQUEST = "actions/app/LATEST_DETAILS_REQUEST";
export const LATEST_DETAILS_SUCCESS = "actions/app/LATEST_DETAILS_SUCCESS";
export const LATEST_DETAILS_FAILED = "actions/app/LATEST_DETAILS_FAILED";

export const getLatestDetails = loader => ({
  type: CALL_API,
  types: [
    LATEST_DETAILS_REQUEST,
    LATEST_DETAILS_SUCCESS,
    LATEST_DETAILS_FAILED
  ],
  method: "get",
  endPoint: `api/v1/latest`,
  showLoader: loader
});
