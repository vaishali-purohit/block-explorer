import {
  getAccountDetail,
  getAccountList,
  getAccountTransfer
} from "../../actions/account.actions";
import { accountMock } from "../../mockData/action.data";

describe("Accounts: action", () => {
  describe("fetch account details", () => {
    test("call api", () => {
      expect(getAccountDetail(accountMock.address)).toMatchSnapshot();
    });
  });

  describe("fetch account list", () => {
    test("call api", () => {
      const index = "1";
      expect(getAccountList(index)).toMatchSnapshot();
    });
  });

  describe("fetch transfers list of a account", () => {
    test("request", () => {
      expect(getAccountTransfer(accountMock.address)).toMatchSnapshot();
    });
  });
});
