/* eslint-disable @typescript-eslint/camelcase */
export const initialState = {
  loading: false,
  data: [],
  count: null,
  transactionDetail: null,
  transactionTransfer: []
};

export const transactionDetailMock = {
  digest: "8IdGDakwx7eC166gG73DRyxMScAUV3xQL1eBkHtS4EZpnFGTY8",
  contract: "contract",
  sender: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
  action: "pending",
  block: "0x4901d62e1d381d2062c6db6e9519b4be0778fd0b969982e1b60a44c80ed27432",
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
};

export const transactionListMock = {
  count: 2,
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
    },
    {
      digest: "8IHSiDakwx7eC166gG73DRyxMScAUV3xQL1eBkHtS4EZpnFGTY8",
      contract: "token",
      sender: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      action: "send",
      block:
        "0x0662b2e3de5ea7cc2e5753f334affcf87b011be2f42966e35fd45ef9559be418",
      fee: 2,
      charge_rate: 2,
      charge_limit: 1,
      valid_from: 1,
      valid_until: 1,
      created_date: "2020-01-28T12:58:38Z",
      data: "",
      status: "active",
      exit_code: -1,
      block_number: 5
    }
  ]
};

export const transactionTransferMock = {
  count: 1,
  next: null,
  previous: null,
  results: [
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
