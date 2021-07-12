import reducer from "../../reducers/contract.reducer";
import {
  CONTRACT_LIST_FAILED,
  CONTRACT_LIST_REQUEST,
  CONTRACT_LIST_SUCCESS,
  CONTRACT_DETAIL_FAILED,
  CONTRACT_DETAIL_REQUEST,
  CONTRACT_DETAIL_SUCCESS,
  CONTRACT_TRANSACTION_FAILED,
  CONTRACT_TRANSACTION_REQUEST,
  CONTRACT_TRANSACTION_SUCCESS
} from "../../actions/contract.actions";
import {
  initialState,
  contractDetailMock,
  contractListMock,
  contractTransactionMock
} from "../../mockData/reducer/contract.data";

describe("Contracts: reducer", () => {
  test("set initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  describe("fetch contract details", () => {
    test("on request", () => {
      const action = { type: CONTRACT_DETAIL_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = {
        type: CONTRACT_DETAIL_SUCCESS,
        data: contractDetailMock
      };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: CONTRACT_DETAIL_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch contract list", () => {
    test("on request", () => {
      const action = { type: CONTRACT_LIST_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = { type: CONTRACT_LIST_SUCCESS, data: contractListMock };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: CONTRACT_LIST_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch transaction list of a contract", () => {
    test("on request", () => {
      const action = { type: CONTRACT_TRANSACTION_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = {
        type: CONTRACT_TRANSACTION_SUCCESS,
        data: contractTransactionMock
      };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: CONTRACT_TRANSACTION_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });
});
