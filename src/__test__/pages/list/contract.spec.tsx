/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import ContractList from "../../../pages/Contracts/ContractList";

describe("Test: BlockList", () => {
  test("without values", () => {
    const props = {
      count: 0,
      app: [],
      getContractList: jest.fn()
    };
    const component = shallow(<ContractList.WrappedComponent {...props} />);

    expect(component.debug()).toMatchSnapshot();
  });
});
