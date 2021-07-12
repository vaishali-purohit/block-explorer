/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import TotalCount from "../../../components/Count/TotalCount";
import { count } from "../../../mockData/component.data";

describe("Test: TotalCount", () => {
  test("without values", () => {
    const props = {
      account: 0,
      block: 0,
      contract: 0,
      transaction: 0,
      transfer: 0
    };
    const result = shallow(<TotalCount {...props} />);
    expect(result.debug()).toMatchSnapshot();
  });

  test("with values", () => {
    const result = shallow(<TotalCount {...count} />);
    expect(result.debug()).toMatchSnapshot();
  });
});
