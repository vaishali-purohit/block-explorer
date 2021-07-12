/* eslint-disable @typescript-eslint/camelcase */
export const initialState = {
  loading: false,
  data: [],
  count: null,
  transferDetail: null
};

export const transferDetailMock = {
  id: 1,
  block: "0xcfcc7d435146a3eb03b7725e9847b6b9676b138a86c1367de6a8bd2cb958cb08",
  tx: "8IdGDakwx7eC166gG73DRyxMScAUV3xQL1eBkHtS4EZpnFGTY8",
  from_address: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
  to_address: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
  amount: 34556
};

export const transferListMock = {
  count: 2,
  next: null,
  previous: null,
  results: [
    {
      id: 2,
      block:
        "0x5683877857487dc24670c6b9c5095b9e34e4cfc178572d28234186ac6f08ea8e",
      tx: "8IHSiDakwx7eC166gG73DRyxMScAUV3xQL1eBkHtS4EZpnFGTY8",
      from_address: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      to_address: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      amount: 67687
    },
    {
      id: 1,
      block:
        "0xcfcc7d435146a3eb03b7725e9847b6b9676b138a86c1367de6a8bd2cb958cb08",
      tx: "8IdGDakwx7eC166gG73DRyxMScAUV3xQL1eBkHtS4EZpnFGTY8",
      from_address: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      to_address: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      amount: 34556
    }
  ]
};
