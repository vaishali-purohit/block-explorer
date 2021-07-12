import reducer from "../../reducers/account.reducer";
import {
  ACCOUNT_DETAIL_FAILED,
  ACCOUNT_DETAIL_REQUEST,
  ACCOUNT_DETAIL_SUCCESS,
  ACCOUNT_LIST_FAILED,
  ACCOUNT_LIST_REQUEST,
  ACCOUNT_LIST_SUCCESS,
  ACCOUNT_TRANSFER_FAILED,
  ACCOUNT_TRANSFER_REQUEST,
  ACCOUNT_TRANSFER_SUCCESS
} from "../../actions/account.actions";
import {
  accountDetailMock,
  accountListMock,
  accountTransferMock,
  initialState
} from "../../mockData/reducer/account.data";

describe("Accounts: reducer", () => {
  test("set initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  describe("fetch account details", () => {
    test("on request", () => {
      const action = { type: ACCOUNT_DETAIL_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = { type: ACCOUNT_DETAIL_SUCCESS, data: accountDetailMock };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: ACCOUNT_DETAIL_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch accounts list", () => {
    test("on request", () => {
      const action = { type: ACCOUNT_LIST_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = { type: ACCOUNT_LIST_SUCCESS, data: accountListMock };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: ACCOUNT_LIST_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch transfer list of a account", () => {
    test("on request", () => {
      const action = { type: ACCOUNT_TRANSFER_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = {
        type: ACCOUNT_TRANSFER_SUCCESS,
        data: accountTransferMock
      };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: ACCOUNT_TRANSFER_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });
});
