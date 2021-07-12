/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import LoaderDialog from "../../../components/Loader";

describe("Test: TotalCount", () => {
  test("without values", () => {
    const result = shallow(<LoaderDialog />);
    expect(result.debug()).toMatchSnapshot();
  });

  test("with values", () => {
    const Props = {
      open: true,
      title: "Transactions"
    };
    const result = shallow(<LoaderDialog {...Props} />);
    expect(result.debug()).toMatchSnapshot();
  });
});
