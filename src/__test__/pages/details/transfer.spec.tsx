/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import TransferDetails from "../../../pages/Transfers/TransferDetails";

describe("Test: TransferDetails", () => {
  test("container", () => {
    const props = {
      getTransferDetail: jest.fn()
    };
    const match = { params: { id: "1" } };

    const result = shallow(
      <TransferDetails.WrappedComponent match={match} {...props} />
    );
    expect(result.debug()).toMatchSnapshot();
  });
});
