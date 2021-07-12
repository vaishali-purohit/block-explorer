/* eslint-disable react/jsx-props-no-spreading */
import FETConversion from "../../util/fetConversion";

describe("Test: FET Conversion", () => {
  test("without values", () => {
    const amount = null;
    const result = FETConversion(amount);

    expect(result).toEqual("0.0000000000");
  });

  test("with values", () => {
    const amount = 2;
    const result = FETConversion(amount);

    expect(result).toEqual("0.0000000002");
  });
});
