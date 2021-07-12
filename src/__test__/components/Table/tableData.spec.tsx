/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import TableData from "../../../components/Table/TableData";
import { tableData } from "../../../mockData/component.data";
import FETConversion from "../../../util/fetConversion";

describe("Test: TableData", () => {
  test("with values", () => {
    const result = shallow(<TableData.WrappedComponent {...tableData} />);
    expect(result.debug()).toMatchSnapshot();
  });

  test("without values", () => {
    const Props = {
      headings: [],
      emptyText: "There are currently no Transactions.",
      rowData: [],
      count: 0,
      getTransactionCount: jest.fn(),
      type: "transaction",
      transactionCount: 0
    };

    const result = shallow(<TableData.WrappedComponent {...Props} />);
    expect(result.debug()).toMatchSnapshot();
  });

  test("On click link with values", () => {
    const result = shallow(<TableData.WrappedComponent {...tableData} />);

    result
      .find("Link")
      .at(1)
      .simulate("click");
    expect(result.debug()).toMatchSnapshot();
  });

  describe("fet conversion", () => {
    test("Calling function", () => {
      expect(FETConversion(0)).toMatchSnapshot();
    });
  });
});
