/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import BlockList from "../../../pages/Blocks/BlockList";

describe("Test: BlockList", () => {
  test("without values", () => {
    const props = {
      count: 0,
      app: [],
      getBlockList: jest.fn()
    };
    const component = shallow(<BlockList.WrappedComponent {...props} />);

    expect(component.debug()).toMatchSnapshot();
  });
});
