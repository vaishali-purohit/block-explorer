import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../../../pages/Header/searchBar";

describe("Test: SearchBar", () => {
  test("without values", () => {
    const result = shallow(<SearchBar />);
    expect(result.debug()).toMatchSnapshot();
  });
});
