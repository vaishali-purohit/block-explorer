import reducer from "../../reducers/transfer.reducer";
import {
  TRANSFER_LIST_FAILED,
  TRANSFER_LIST_REQUEST,
  TRANSFER_LIST_SUCCESS,
  TRANSFER_DETAIL_FAILED,
  TRANSFER_DETAIL_REQUEST,
  TRANSFER_DETAIL_SUCCESS
} from "../../actions/transfer.actions";
import {
  initialState,
  transferDetailMock,
  transferListMock
} from "../../mockData/reducer/transfer.data";

describe("Transfers: reducer", () => {
  test("set initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  describe("fetch transfer details", () => {
    test("on request", () => {
      const action = { type: TRANSFER_DETAIL_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = {
        type: TRANSFER_DETAIL_SUCCESS,
        data: transferDetailMock
      };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: TRANSFER_DETAIL_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("fetch transfers list", () => {
    test("on request", () => {
      const action = { type: TRANSFER_LIST_REQUEST, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on success", () => {
      const action = { type: TRANSFER_LIST_SUCCESS, data: transferListMock };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });

    test("on failure", () => {
      const action = { type: TRANSFER_LIST_FAILED, data: {} };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });
});
