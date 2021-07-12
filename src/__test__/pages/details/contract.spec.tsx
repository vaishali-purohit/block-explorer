/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import ContractDetails from "../../../pages/Contracts/ContractDetails";

describe("Test: ContractDetails", () => {
  test("container", () => {
    const props = {
      getContractDetail: jest.fn(),
      getContractTransaction: jest.fn(),
      contractDetail: {
        code: ""
      }
    };
    const match = { params: { id: "1" } };

    const result = shallow(
      <ContractDetails.WrappedComponent match={match} {...props} />
    );
    expect(result.debug()).toMatchSnapshot();
  });
});
