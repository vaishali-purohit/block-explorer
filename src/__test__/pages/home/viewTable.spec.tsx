/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import ViewTable from "../../../pages/Home/viewTable";

describe("Test: ViewTable", () => {
  test("without values", () => {
    const props = {
      getLatestDetails: jest.fn()
    };
    const result = shallow(<ViewTable.WrappedComponent {...props} />);
    expect(result.debug()).toMatchSnapshot();
  });

  test("Onclick to link", () => {
    const props = {
      app: [],
      getLatestDetails: jest.fn()
    };
    const result = shallow(<ViewTable.WrappedComponent {...props} />);

    result
      .find("Link")
      .at(1)
      .simulate("click");
    expect(result.debug()).toMatchSnapshot();
  });
});
