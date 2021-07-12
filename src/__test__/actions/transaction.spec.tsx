import {
  getTransactionDetail,
  getTransactionList,
  getTransactionTransfer
} from "../../actions/transaction.actions";
import { transactionMock } from "../../mockData/action.data";

describe("Transactions: action", () => {
  describe("fetch transaction details", () => {
    test("request", () => {
      expect(
        getTransactionDetail(transactionMock.digest, false)
      ).toMatchSnapshot();
    });
  });

  describe("fetch transaction list", () => {
    test("request", () => {
      const index = "1";
      expect(getTransactionList(index, false)).toMatchSnapshot();
    });
  });

  describe("fetch transfers list of a transaction", () => {
    test("request", () => {
      expect(
        getTransactionTransfer(transactionMock.digest, false)
      ).toMatchSnapshot();
    });
  });
});
