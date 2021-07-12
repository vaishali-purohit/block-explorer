import { CALL_API } from "./api.actions";

export const REQUEST_TOKENTAP_REQUEST =
  "actions/tokentap/REQUEST_TOKENTAP_REQUEST";
export const REQUEST_TOKENTAP_SUCCESS =
  "actions/tokentap/REQUEST_TOKENTAP_SUCCESS";
export const REQUEST_TOKENTAP_FAILED =
  "actions/tokentap/REQUEST_TOKENTAP_FAILED";

export const getTokenTap = () => ({
  type: CALL_API,
  types: [
    REQUEST_TOKENTAP_REQUEST,
    REQUEST_TOKENTAP_SUCCESS,
    REQUEST_TOKENTAP_FAILED
  ],
  method: "get",
  endPoint: "api/v1/tokentap"
});

export const REQUEST_SENDTOKEN_REQUEST =
  "actions/tokentap/REQUEST_SENDTOKEN_REQUEST";
export const REQUEST_SENDTOKEN_SUCCESS =
  "actions/tokentap/REQUEST_SENDTOKEN_SUCCESS";
export const REQUEST_SENDTOKEN_FAILED =
  "actions/tokentap/REQUEST_SENDTOKEN_FAILED";

export const sendToken = address => ({
  type: CALL_API,
  types: [
    REQUEST_SENDTOKEN_REQUEST,
    REQUEST_SENDTOKEN_SUCCESS,
    REQUEST_SENDTOKEN_FAILED
  ],
  method: "post",
  endPoint: "api/v1/send_tokens/",
  body: { address }
});

export const REQUEST_SENDTOKENSTATUS_REQUEST =
  "actions/tokentap/REQUEST_SENDTOKENSTATUS_REQUEST";
export const REQUEST_SENDTOKENSTATUS_SUCCESS =
  "actions/tokentap/REQUEST_SENDTOKENSTATUS_SUCCESS";
export const REQUEST_SENDTOKENSTATUS_FAILED =
  "actions/tokentap/REQUEST_SENDTOKENSTATUS_FAILED";

export const sendTokenStatus = digest => ({
  type: CALL_API,
  types: [
    REQUEST_SENDTOKENSTATUS_REQUEST,
    REQUEST_SENDTOKENSTATUS_SUCCESS,
    REQUEST_SENDTOKENSTATUS_FAILED
  ],
  method: "get",
  endPoint: `api/v1/send_tokens/${digest}`
});
