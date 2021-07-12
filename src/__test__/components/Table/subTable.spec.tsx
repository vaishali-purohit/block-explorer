/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import LatestBlock from "../../../components/Table/SubTable/latestBlock";
import LatestTransfers from "../../../components/Table/SubTable/latestTransfers";
import {
  blockSubtable,
  transactionSubtable
} from "../../../mockData/component.data";
import FETConversion from "../../../util/fetConversion";

describe("Test: SubTable", () => {
  describe("Latest Blocks: component", () => {
    test("with values", () => {
      const result = shallow(
        <LatestBlock.WrappedComponent {...blockSubtable} />
      );

      expect(result.debug()).toMatchSnapshot();
    });

    test("without values", () => {
      const Props = {
        TableData: null,
        Value: "",
        getLatestDetails: jest.fn()
      };
      const result = shallow(<LatestBlock.WrappedComponent {...Props} />);

      expect(result.debug()).toMatchSnapshot();
    });

    test("On click link with values", () => {
      const result = shallow(
        <LatestBlock.WrappedComponent {...blockSubtable} />
      );
      result
        .find("Link")
        .at(1)
        .simulate("click");

      expect(result.debug()).toMatchSnapshot();
    });
  });

  describe("Latest Transactions: component", () => {
    test("with values", () => {
      const result = shallow(
        <LatestTransfers.WrappedComponent {...transactionSubtable} />
      );

      expect(result.debug()).toMatchSnapshot();
    });

    test("without values", () => {
      const Props = {
        TableData: null,
        Value: "",
        getLatestDetails: jest.fn()
      };
      const result = shallow(<LatestTransfers.WrappedComponent {...Props} />);

      expect(result.debug()).toMatchSnapshot();
    });

    test("On click link with values", () => {
      const result = shallow(
        <LatestTransfers.WrappedComponent {...transactionSubtable} />
      );
      result
        .find("Link")
        .at(1)
        .simulate("click");

      expect(result.debug()).toMatchSnapshot();
    });
  });

  describe("fet conversion", () => {
    test("Calling function", () => {
      expect(FETConversion(0)).toMatchSnapshot();
    });
  });
});
