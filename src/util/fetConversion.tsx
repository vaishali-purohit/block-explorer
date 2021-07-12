const FETConversion = (amount: number) => {
  let value: number;
  if (amount) {
    value = Math.floor(amount) / 1e10;
  } else value = 0;
  return value.toFixed(10);
};

export default FETConversion;
