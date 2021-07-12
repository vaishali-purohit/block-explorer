/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import TransferList from "../../../pages/Transfers/TransferList";

describe("Test: BlockList", () => {
  test("without values", () => {
    const props = {
      count: 0,
      app: [],
      getTransferList: jest.fn()
    };
    const component = shallow(<TransferList.WrappedComponent {...props} />);

    expect(component.debug()).toMatchSnapshot();
  });
});
