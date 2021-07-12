/* eslint-disable react/jsx-props-no-spreading */
// import React from "react";
// import { shallow } from "enzyme";
// import Header from "../../../pages/Header";
import localStorage from "../../../mockData/localstorage";

describe("Test: Header", () => {
  test("returns undefined if requested item doesn't exist", () => {
    const foo = localStorage.getItem("foo");
    expect(foo).toBeUndefined();
  });

  test("gets the value of an item", () => {
    localStorage.setItem("foo", "bar");
    const foo = localStorage.getItem("foo");
    expect(foo).toBe("bar");
  });

  // test("with values", () => {
  //   const Props = {
  //     networkTap: ["devnet", "testnet"],
  //     selectedNetwork: "devnet",
  //     tokenTap: "true",
  //     getTokenTap: jest.fn(),
  //     getNetworkTap: jest.fn()
  //   };

  //   const result = shallow(<Header.WrappedComponent {...Props} />);
  //   expect(result.debug()).toMatchSnapshot();
  // });
});
