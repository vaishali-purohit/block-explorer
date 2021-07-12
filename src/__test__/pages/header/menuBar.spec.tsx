/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import MenuBar from "../../../pages/Header/menuBar";

describe("Test: MenuBar", () => {
  const Props = {
    network: [{ name: "devnet" }, { name: "testnet" }],
    type: "development",
    mode: "development",
    token: "true",
    clearState: jest.fn()
  };

  beforeEach(() => {
    // window.addEventListener = jest.fn();
    window.location.assign = jest.fn();
  });

  test("without values", () => {
    const result = shallow(<MenuBar.WrappedComponent {...Props} />);
    // expect(window.addEventListener).toHaveBeenCalled();
    expect(result.debug()).toMatchSnapshot();
  });

  test("onClick to link", () => {
    const result = shallow(<MenuBar.WrappedComponent {...Props} />);

    result
      .find("DropdownItem")
      .at(1)
      .simulate("click");
    // expect(window.addEventListener).toHaveBeenCalled();
    expect(result.debug()).toMatchSnapshot();
  });

  test("When type is null", () => {
    const props = {
      network: [{ name: "devnet" }, { name: "testnet" }],
      type: null,
      mode: "development",
      token: "true",
      clearState: jest.fn()
    };
    const result = shallow(<MenuBar.WrappedComponent {...props} />);

    result
      .find("DropdownItem")
      .at(1)
      .simulate("click");
    // expect(window.addEventListener).toHaveBeenCalled();
    expect(result.debug()).toMatchSnapshot();
  });
});
