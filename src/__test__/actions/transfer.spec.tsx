import {
  getTransferDetail,
  getTransferList
} from "../../actions/transfer.actions";

describe("Transfers: action", () => {
  describe("fetch transfer details", () => {
    test("request", () => {
      const pk = "5";
      expect(getTransferDetail(pk, false)).toMatchSnapshot();
    });
  });

  describe("fetch transfer list", () => {
    test("request", () => {
      const index = "1";
      expect(getTransferList(index, false)).toMatchSnapshot();
    });
  });
});
