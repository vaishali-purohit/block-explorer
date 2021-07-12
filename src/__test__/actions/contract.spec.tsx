import {
  getContractDetail,
  getContractList,
  getContractTransaction
} from "../../actions/contract.actions";
import { contractMock } from "../../mockData/action.data";

describe("Contracts: action", () => {
  describe("fetch contract details", () => {
    test("request", () => {
      expect(getContractDetail(contractMock.name, false)).toMatchSnapshot();
    });
  });

  describe("fetch contract list", () => {
    test("request", () => {
      const index = "1";
      expect(getContractList(index, false)).toMatchSnapshot();
    });
  });

  describe("fetch transactions list of a contract", () => {
    test("request", () => {
      expect(
        getContractTransaction(contractMock.name, false)
      ).toMatchSnapshot();
    });
  });
});
