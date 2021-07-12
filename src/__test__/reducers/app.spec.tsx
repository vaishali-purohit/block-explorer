import reducer from "../../reducers/app.reducer";
import {
  SET_LOAD,
  SHOW_LOADER,
  HIDE_LOADER
  //   REQUEST_TOKEN_REQUEST,
  //   REQUEST_TOKEN_SUCCESS,
  //   REQUEST_TOKEN_FAILED,
  //   REFRESH_TOKEN_SUCCESS
} from "../../actions/app.actions";
import { initialState } from "../../mockData/reducer/app.data";

describe("App: reducer", () => {
  //   test("set initial state", () => {
  //     expect(reducer(undefined, {})).toMatchSnapshot();
  //   });

  //   describe("fetch token details", () => {
  //     test("on request", () => {
  //       const action = { type: REQUEST_TOKEN_REQUEST, data: {} };
  //       expect(reducer(initialState, action)).toMatchSnapshot();
  //     });

  //     test("on success", () => {
  //       const action = { type: REQUEST_TOKEN_SUCCESS, data: tokenMock };
  //       expect(reducer(initialState, action)).toMatchSnapshot();
  //     });

  //     test("on failure", () => {
  //       const action = { type: REQUEST_TOKEN_FAILED, data: {} };
  //       expect(reducer(initialState, action)).toMatchSnapshot();
  //     });
  //   });

  //   describe("fetch access token using refresh token", () => {
  //     test("on success", () => {
  //       const action = { type: REFRESH_TOKEN_SUCCESS, data: accessToken };
  //       expect(reducer(initialState, action)).toMatchSnapshot();
  //     });
  //   });

  describe("When show loader", () => {
    test("on success", () => {
      const action = { type: SHOW_LOADER, payload: "Fake loader" };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("When hide loader", () => {
    test("on success", () => {
      const action = { type: HIDE_LOADER };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe("When set loader", () => {
    test("on success", () => {
      const action = { type: SET_LOAD, value: "Fake" };
      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });
});
