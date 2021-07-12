/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import Tabs from "../../../components/Tabs";
import { tabData } from "../../../mockData/component.data";

describe("Test: Tabs", () => {
  test("with values", () => {
    const result = shallow(<Tabs {...tabData} />);
    expect(result.debug()).toMatchSnapshot();
  });

  test("without values", () => {
    const Props = {
      headings: [],
      emptyText: "There are currently no Transactions.",
      rowData: [],
      tabHead: [
        {
          key: "transactions",
          label: "Transactions",
          type: "tabs"
        }
      ],
      count: 0,
      type: "transactions",
      code: ""
    };

    const result = shallow(<Tabs {...Props} />);
    expect(result.debug()).toMatchSnapshot();
  });
});
