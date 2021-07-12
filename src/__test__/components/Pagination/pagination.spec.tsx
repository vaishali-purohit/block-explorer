/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import Pagination from "../../../components/Pagination";
import {
  blockPagination,
  accountPagination,
  contractPagination,
  transactionPagination,
  transferPagination
} from "../../../mockData/component.data";

describe("Test: TotalCount", () => {
  test("without values", () => {
    const props = {
      currentPage: 0,
      pagesCount: 0,
      type: "",
      handleClick: jest.fn()
    };
    const result = shallow(<Pagination.WrappedComponent {...props} />);
    expect(result.debug()).toMatchSnapshot();
  });

  test("with values", () => {
    const result = shallow(
      <Pagination.WrappedComponent {...blockPagination} />
    );
    expect(result.debug()).toMatchSnapshot();
  });

  test("onClick function for block", () => {
    const result = shallow(
      <Pagination.WrappedComponent {...blockPagination} />
    );
    result
      .find("First")
      .at(0)
      .simulate("click", { preventDefault() {} });
  });

  test("onClick function for account", () => {
    const result = shallow(
      <Pagination.WrappedComponent {...accountPagination} />
    );
    result
      .find("Prev")
      .at(0)
      .simulate("click", { preventDefault() {} });
  });

  test("onClick function for contract", () => {
    const result = shallow(
      <Pagination.WrappedComponent {...contractPagination} />
    );
    result
      .find("PageItem")
      .at(0)
      .simulate("click", { preventDefault() {} });
  });

  test("onClick function for transaction", () => {
    const result = shallow(
      <Pagination.WrappedComponent {...transactionPagination} />
    );
    result
      .find("Next")
      .at(0)
      .simulate("click", { preventDefault() {} });
  });

  test("onClick function for transfer", () => {
    const result = shallow(
      <Pagination.WrappedComponent {...transferPagination} />
    );
    result
      .find("Last")
      .at(0)
      .simulate("click", { preventDefault() {} });
  });
});
