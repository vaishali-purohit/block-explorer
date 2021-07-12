/* eslint-disable @typescript-eslint/camelcase */
export const count = {
  account: 123,
  block: 4567,
  contract: 67,
  transaction: 50,
  transfer: 40
};

export const blockPagination = {
  currentPage: 3,
  pagesCount: 10,
  type: "block",
  handleClick: jest.fn(),
  getBlockList: jest.fn()
};

export const accountPagination = {
  currentPage: 3,
  pagesCount: 10,
  type: "account",
  handleClick: jest.fn(),
  getAccountList: jest.fn()
};

export const contractPagination = {
  currentPage: 3,
  pagesCount: 10,
  type: "contract",
  handleClick: jest.fn(),
  getContractList: jest.fn()
};

export const transactionPagination = {
  currentPage: 3,
  pagesCount: 10,
  type: "transaction",
  handleClick: jest.fn(),
  getTransactionList: jest.fn()
};

export const transferPagination = {
  currentPage: 3,
  pagesCount: 10,
  type: "transfer",
  handleClick: jest.fn(),
  getTransferList: jest.fn()
};

export const blockSubtable = {
  TableData: [
    {
      block_number: 200,
      digest: "dfcszlkfdlfkdfcszlkfdlfkdfcszlkfdlfk",
      transaction_count: 2,
      miner: "dfcszlkfdlfk",
      created_date: "2020-01-28T12:58:38Z"
    }
  ],
  Value: "blocks",
  getBlockList: jest.fn()
};

export const transactionSubtable = {
  TableData: [
    {
      id: 1,
      block:
        "0x5d71f466095cc556a1a3b3266e340423f03586dc05bf36e8ae43236b8c31c5ab",
      tx: "0x908hT96e66014598146a2fb87dc9ea0e799b34c7f844aab600ade059f52e234f",
      from_address: "2oZYYuL3m9E7xddbPg9PNUHzmmtqTGAgnAMmEhsHzogBQQ3r4D",
      to_address: "2oZYYuL3m9E7xddbPg9PNUHzmmtqTGAgnAMmEhsHzogBQQ3r4D",
      amount: 785222,
      block_number: 37,
      created_date: "2020-03-04T08:06:16Z",
      miner: "2oZYYuL3m9E7xddbPg9PNUHzmmtqTGAgnAMmEhsHzogBQQ3r4D"
    }
  ],
  Value: "transactions",
  getTransactionList: jest.fn()
};

export const tableData = {
  headings: [
    {
      key: "digest",
      label: "Hash",
      type: "transaction"
    },
    {
      key: "block_number",
      label: "Block",
      type: "transaction"
    },
    {
      key: "sender",
      label: "Sender",
      type: "transaction"
    },
    {
      key: "contract",
      label: "Contract",
      type: "transaction"
    },
    {
      key: "transactions",
      label: "Contract",
      type: "transaction"
    },
    {
      key: "created_date",
      label: "Contract",
      type: "transaction"
    }
  ],
  emptyText: "There are currently no Transactions.",
  rowData: [
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
  ],
  count: 2,
  getTransactionCount: jest.fn(),
  type: "transaction",
  transactionCount: 0
};

export const tableDetails = {
  headings: [
    {
      key: "status",
      label: "Status",
      type: "transaction"
    },
    {
      key: "contract",
      label: "Contract",
      type: "transaction"
    },
    {
      key: "action",
      label: "Action",
      type: "transaction"
    },
    {
      key: "digest",
      label: "Hash",
      type: "transaction"
    },
    {
      key: "block_number",
      label: "Block",
      type: "transaction"
    },
    {
      key: "charge_rate",
      label: "Charge Rate",
      type: "transaction"
    },
    {
      key: "charge_limit",
      label: "Charge Limit",
      type: "transaction"
    }
  ],
  emptyText: "There are currently no Transactions.",
  rowData: [
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
  ],
  count: 0
};

export const tabData = {
  headings: [
    {
      key: "digest",
      label: "Hash",
      type: "transaction"
    },
    {
      key: "sender",
      label: "Sender",
      type: "transaction"
    },
    {
      key: "contract",
      label: "Contract",
      type: "transaction"
    }
  ],
  emptyText: "There are currently no Transactions.",
  rowData: [
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
  ],
  tabHead: [
    {
      key: "transactions",
      label: "Transactions",
      type: "tabs"
    }
  ],
  count: 4,
  type: "transaction",
  code: ""
};
