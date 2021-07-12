import reducer from "../../reducers/tokentap.reducer";
import {
  REQUEST_TOKENTAP_FAILED,
  REQUEST_TOKENTAP_REQUEST,
  REQUEST_TOKENTAP_SUCCESS,
  REQUEST_SENDTOKEN_FAILED,
  REQUEST_SENDTOKEN_SUCCESS,
  REQUEST_SENDTOKEN_REQUEST,
  REQUEST_SENDTOKENSTATUS_SUCCESS
} from "../../actions/tokentap.actions";
import {
  tokenTapMock,
  sendTokenMock,
  sendTokenStatusMock,
  initialState
} from "../../mockData/reducer/tokentap.data";

describe("Tokentap: reducer", () => {
  test("set initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  describe("fetch tokentap valid", () => {
    test("on request", () => {
      const action = { type: REQUEST_TOKENTAP_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = { type: REQUEST_TOKENTAP_SUCCESS, data: tokenTapMock };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: REQUEST_TOKENTAP_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("create token", () => {
    test("on request", () => {
      const action = { type: REQUEST_SENDTOKEN_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = { type: REQUEST_SENDTOKEN_SUCCESS, data: sendTokenMock };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: REQUEST_SENDTOKEN_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("token status", () => {
    test("on success", () => {
      const action = {
        type: REQUEST_SENDTOKENSTATUS_SUCCESS,
        data: sendTokenStatusMock
      };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });
});
