import reducer from "../../reducers/transaction.reducer";
import {
  TRANSACTION_LIST_FAILED,
  TRANSACTION_LIST_REQUEST,
  TRANSACTION_LIST_SUCCESS,
  TRANSACTION_DETAIL_FAILED,
  TRANSACTION_DETAIL_REQUEST,
  TRANSACTION_DETAIL_SUCCESS,
  TRANSACTION_TRANSFER_FAILED,
  TRANSACTION_TRANSFER_REQUEST,
  TRANSACTION_TRANSFER_SUCCESS
} from "../../actions/transaction.actions";
import {
  initialState,
  transactionDetailMock,
  transactionListMock,
  transactionTransferMock
} from "../../mockData/reducer/transaction.data";

describe("Transactions: reducer", () => {
  test("set initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  describe("fetch transaction details", () => {
    test("on request", () => {
      const action = { type: TRANSACTION_DETAIL_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = {
        type: TRANSACTION_DETAIL_SUCCESS,
        data: transactionDetailMock
      };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: TRANSACTION_DETAIL_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch transactions list", () => {
    test("on request", () => {
      const action = { type: TRANSACTION_LIST_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = {
        type: TRANSACTION_LIST_SUCCESS,
        data: transactionListMock
      };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: TRANSACTION_LIST_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch transfer list of a transaction", () => {
    test("on request", () => {
      const action = { type: TRANSACTION_TRANSFER_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = {
        type: TRANSACTION_TRANSFER_SUCCESS,
        data: transactionTransferMock
      };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: TRANSACTION_TRANSFER_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });
});
