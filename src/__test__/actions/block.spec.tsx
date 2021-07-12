import {
  getBlockDetail,
  getBlockList,
  getTransactionCount
} from "../../actions/block.actions";
import { blockMock } from "../../mockData/action.data";

describe("Blocks: action", () => {
  describe("fetch block details", () => {
    test("request", () => {
      expect(getBlockDetail(blockMock.digest, false)).toMatchSnapshot();
    });
  });

  describe("fetch block list", () => {
    test("request", () => {
      const index = "1";
      expect(getBlockList(index, false)).toMatchSnapshot();
    });
  });

  describe("fetch transaction list of a block", () => {
    test("request", () => {
      expect(getTransactionCount(blockMock.digest, false)).toMatchSnapshot();
    });
  });
});
