/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import TransactionList from "../../../pages/Transactions/TransactionList";

describe("Test: BlockList", () => {
  test("without values", () => {
    const props = {
      count: 0,
      app: [],
      getTransactionList: jest.fn()
    };
    const component = shallow(<TransactionList.WrappedComponent {...props} />);

    expect(component.debug()).toMatchSnapshot();
  });
});
