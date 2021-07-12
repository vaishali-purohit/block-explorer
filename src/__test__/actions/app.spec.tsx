import {
  //   getToken,
  //   refreshAccessToken,
  //   setTokens,
  //   checkRefreshToken
  showLoader,
  hideLoader,
  setLoading
} from "../../actions/app.actions";
// import { appMock } from "../../mockData/action.data";

describe("App: action", () => {
  //   describe("fetch tokens", () => {
  //     test("request", () => {
  //       expect(getToken(appMock.username, appMock.password)).toMatchSnapshot();
  //     });
  //   });

  //   describe("fetch access token", () => {
  //     test("request", () => {
  //       expect(refreshAccessToken(appMock.refreshtoken)).toMatchSnapshot();
  //     });
  //   });

  //   describe("set tokens", () => {
  //     test("request", () => {
  //       expect(
  //         setTokens(appMock.accesstoken, appMock.refreshtoken)
  //       ).toMatchSnapshot();
  //     });
  //   });

  //   describe("check refresh tokens", () => {
  //     test("request", () => {
  //       expect(
  //         checkRefreshToken(appMock.validTill, appMock.refreshtoken)
  //       ).toMatchSnapshot();
  //     });
  //   });

  describe("check loader to show", () => {
    test("request", () => {
      expect(showLoader()).toMatchSnapshot();
    });
  });

  describe("check loader to hide", () => {
    test("request", () => {
      expect(hideLoader()).toMatchSnapshot();
    });
  });

  describe("set loader", () => {
    test("request", () => {
      expect(setLoading("fake")).toMatchSnapshot();
    });
  });
});
