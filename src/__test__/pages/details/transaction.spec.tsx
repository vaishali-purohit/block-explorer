/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import TransactionDetails from "../../../pages/Transactions/TransactionDetails";

describe("Test: TransactionDetails", () => {
  let props: any;
  const mockLoadDetail = jest.fn();
  const mockLoadTransfer = jest.fn();
  const match = { params: { id: "1" } };

  beforeEach(() => {
    props = {
      getTransactionDetail: mockLoadDetail,
      getTransactionTransfer: mockLoadTransfer
    };
  });

  test("container", () => {
    const result = shallow(
      <TransactionDetails.WrappedComponent match={match} {...props} />
    );
    expect(result.debug()).toMatchSnapshot();
  });

  test("componentDidUpdate", () => {
    const wrapper = shallow(
      <TransactionDetails.WrappedComponent match={match} {...props} />
    ) as any;
    wrapper.setProps({ match: { params: { id: 2 } } });
    expect(wrapper.instance().props.getTransactionDetail).toBeCalled();
  });
});
