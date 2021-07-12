import React from "react";
import { shallow } from "enzyme";
import Home from "../../../pages/Home";

describe("Test: Home", () => {
  test("without values", () => {
    const result = shallow(<Home.WrappedComponent />);
    expect(result.debug()).toMatchSnapshot();
  });
});
