/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import TableDetails from "../../../components/Table/TableDetails";
import { tableDetails } from "../../../mockData/component.data";
import FETConversion from "../../../util/fetConversion";

describe("Test: TableDetails", () => {
  test("with values", () => {
    const result = shallow(<TableDetails {...tableDetails} />);
    expect(result.debug()).toMatchSnapshot();
  });

  test("without values", () => {
    const Props = {
      headings: [],
      emptyText: "",
      rowData: [],
      count: 0
    };

    const result = shallow(<TableDetails {...Props} />);
    expect(result.debug()).toMatchSnapshot();
  });

  test("On click link with values", () => {
    const result = shallow(<TableDetails {...tableDetails} />);

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
