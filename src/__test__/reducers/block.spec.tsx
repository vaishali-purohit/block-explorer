import reducer from "../../reducers/block.reducer";
import {
  BLOCK_LIST_FAILED,
  BLOCK_LIST_REQUEST,
  BLOCK_LIST_SUCCESS,
  BLOCK_TRANSACTION_REQUEST,
  BLOCK_TRANSACTION_FAILED,
  BLOCK_TRANSACTION_SUCCESS,
  BLOCK_DETAIL_FAILED,
  BLOCK_DETAIL_REQUEST,
  BLOCK_DETAIL_SUCCESS
} from "../../actions/block.actions";
import {
  initialState,
  blockDetailMock,
  blockListMock,
  blockTransactionMock
} from "../../mockData/reducer/block.data";

describe("Blocks: reducer", () => {
  test("set initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  describe("fetch block details", () => {
    test("on request", () => {
      const action = { type: BLOCK_DETAIL_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = { type: BLOCK_DETAIL_SUCCESS, data: blockDetailMock };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: BLOCK_DETAIL_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch block list", () => {
    test("on request", () => {
      const action = { type: BLOCK_LIST_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = { type: BLOCK_LIST_SUCCESS, data: blockListMock };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: BLOCK_LIST_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch transaction list of a block", () => {
    test("on request", () => {
      const action = { type: BLOCK_TRANSACTION_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = {
        type: BLOCK_TRANSACTION_SUCCESS,
        data: blockTransactionMock
      };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: BLOCK_TRANSACTION_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });
});
