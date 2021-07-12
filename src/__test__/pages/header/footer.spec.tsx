import React from "react";
import { shallow } from "enzyme";
import Footer from "../../../pages/Footer";

describe("Test: Footer", () => {
  test("without values", () => {
    const result = shallow(<Footer />);
    expect(result.debug()).toMatchSnapshot();
  });
});
