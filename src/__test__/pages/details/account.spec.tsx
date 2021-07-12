/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import AccountDetails from "../../../pages/Accounts/AccountDetails";

describe("Test: AccountDeatils", () => {
  test("container", () => {
    const props = {
      getAccountDetail: jest.fn(),
      getAccountTransfer: jest.fn()
    };
    const match = { params: { id: "1" } };

    const result = shallow(
      <AccountDetails.WrappedComponent match={match} {...props} />
    );
    expect(result.debug()).toMatchSnapshot();
  });
});
