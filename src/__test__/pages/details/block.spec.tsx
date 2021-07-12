/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import BlockDetails from "../../../pages/Blocks/BlockDetails";

describe("Test: BlockDetails", () => {
  let props: any;
  const mockLoadDetail = jest.fn();
  const mockLoadCount = jest.fn();
  const match = { params: { id: "1" } };

  beforeEach(() => {
    props = {
      getBlockDetail: mockLoadDetail,
      getTransactionCount: mockLoadCount
    };
  });

  test("container", () => {
    const result = shallow(
      <BlockDetails.WrappedComponent match={match} {...props} />
    );
    expect(result.debug()).toMatchSnapshot();
  });

  test("componentDidUpdate", () => {
    const wrapper = shallow(
      <BlockDetails.WrappedComponent {...props} match={match} />
    ) as any;
    wrapper.setProps({ match: { params: { id: 2 } } });
    expect(wrapper.instance().props.getBlockDetail).toBeCalled();
  });
});
