/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import AccountList from "../../../pages/Accounts/AccountList";

describe("Test: AccountList", () => {
  test("without values", () => {
    const props = {
      count: 0,
      app: [],
      getAccountList: jest.fn()
    };
    const component = shallow(<AccountList.WrappedComponent {...props} />);

    expect(component.debug()).toMatchSnapshot();
  });
});
