/* eslint-disable @typescript-eslint/camelcase */
export const initialState = {
  loading: false,
  data: [],
  count: null,
  contractDetail: [],
  contractTransactionCount: null,
  contractTransaction: []
};

export const contractDetailMock = [
  {
    digest: "7yHUDakwx7eC166gG73DRyxMScAUV3xQL1eBkHtS4EZpnFGTY8",
    name: "contract",
    code: "",
    first_appearance: 281474976710656,
    block: "0x12fa0a394b3b1393963920f0fe613ee3a4a1579404b7d9507ae5160dd656ee63"
  }
];

export const contractListMock = {
  count: 2,
  next: null,
  previous: null,
  results: [
    {
      digest: "7yHUDakwx7eC166gG73DRyxMScAUV3xQL1eBkHtS4EZpnFGTY8",
      name: "contract",
      code: "",
      first_appearance: 281474976710656,
      block:
        "0x12fa0a394b3b1393963920f0fe613ee3a4a1579404b7d9507ae5160dd656ee63"
    },
    {
      digest: "2uSuDakwx7eC166gG73DRyxMScAUV3xQL1eBkHtS4EZpnFGTY8",
      name: "token",
      code: "",
      first_appearance: 281474976710656,
      block:
        "0xde1b565da1c85755f9fbe54eb5c274301a7eb709cecdc006d8e9e4f4d9325c96"
    }
  ]
};

export const contractTransactionMock = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      digest: "8IdGDakwx7eC166gG73DRyxMScAUV3xQL1eBkHtS4EZpnFGTY8",
      contract: "contract",
      sender: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      action: "pending",
      block:
        "0x4901d62e1d381d2062c6db6e9519b4be0778fd0b969982e1b60a44c80ed27432",
      fee: 34,
      charge_rate: 2,
      charge_limit: 3,
      valid_from: 4,
      valid_until: 3,
      created_date: "2020-01-28T12:58:18Z",
      data: "",
      status: "pending",
      exit_code: -1,
      block_number: 10
    }
  ]
};
