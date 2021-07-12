import {
  getTokenTap,
  sendToken,
  sendTokenStatus
} from "../../actions/tokentap.actions";

describe("Tokentap: action", () => {
  describe("fetch tokentap valid", () => {
    test("call api", () => {
      expect(getTokenTap()).toMatchSnapshot();
    });
  });

  describe("create token", () => {
    test("call api", () => {
      const address = "2jhdksjfGH2HJKLK3HJKJKL";
      expect(sendToken(address)).toMatchSnapshot();
    });
  });

  describe("Get token status", () => {
    test("request", () => {
      const digest =
        "19c37451dbe77fb8f7bfd72a4eba4b7685a010978acca4eb68108e5f087b69cb";
      expect(sendTokenStatus(digest)).toMatchSnapshot();
    });
  });
});
