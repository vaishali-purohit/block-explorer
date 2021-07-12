import { getNetworkTap, getNetwork } from "../../actions/networktap.actions";

describe("Networktap: action", () => {
  describe("network details", () => {
    test("request", () => {
      expect(getNetworkTap(false)).toMatchSnapshot();
    });
  });

  describe("selected network", () => {
    test("request", () => {
      expect(getNetwork("fake", false)).toMatchSnapshot();
    });
  });
});
