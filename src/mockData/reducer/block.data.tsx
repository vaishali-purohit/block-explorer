/* eslint-disable @typescript-eslint/camelcase */
export const initialState = {
  loading: false,
  data: [],
  count: null,
  transactionCount: 0,
  transactionData: [],
  blockDetail: null
};

export const blockDetailMock = {
  digest: "0x42a7777d2b8ab497c9138d7bfffa677ca97e16d7eb77a5449466a681d765d13f",
  parent_digest:
    "0x09f8af377382b9bb815fbd9722204eb0219baa755cfba2860f61e88407c0b227",
  block_number: 7193,
  miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
  merkle_hash:
    "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
  timestamp: "2020-01-29T08:54:10Z",
  created_date: "2020-01-29T08:54:10Z",
  reward: 0,
  transaction_count: 0
};

export const blockListMock = {
  count: 7193,
  next: "http://127.0.0.1:8000/api/v1/blocks/?page=2",
  previous: null,
  results: [
    {
      digest:
        "0x42a7777d2b8ab497c9138d7bfffa677ca97e16d7eb77a5449466a681d765d13f",
      parent_digest:
        "0x09f8af377382b9bb815fbd9722204eb0219baa755cfba2860f61e88407c0b227",
      block_number: 7193,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:54:10Z",
      created_date: "2020-01-29T08:54:10Z",
      reward: 0,
      transaction_count: 0
    },
    {
      digest:
        "0x09f8af377382b9bb815fbd9722204eb0219baa755cfba2860f61e88407c0b227",
      parent_digest:
        "0x048fbee31899df6f70a049868632d8f8699c4b284accd1fed455c2bf9ebd7221",
      block_number: 7192,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:54:00Z",
      created_date: "2020-01-29T08:54:00Z",
      reward: 0,
      transaction_count: 0
    },
    {
      digest:
        "0x048fbee31899df6f70a049868632d8f8699c4b284accd1fed455c2bf9ebd7221",
      parent_digest:
        "0xa24fdef857ecf58a6af4d39202bddfa5ea8fedd348f057f8ed5beb39e3e9c2d2",
      block_number: 7191,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:53:50Z",
      created_date: "2020-01-29T08:53:50Z",
      reward: 0,
      transaction_count: 0
    },
    {
      digest:
        "0xa24fdef857ecf58a6af4d39202bddfa5ea8fedd348f057f8ed5beb39e3e9c2d2",
      parent_digest:
        "0x6756d2dedf000875b68e37f6edeafaddb00199ca5507512727cadcb474b693a2",
      block_number: 7190,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:53:40Z",
      created_date: "2020-01-29T08:53:40Z",
      reward: 0,
      transaction_count: 0
    },
    {
      digest:
        "0x6756d2dedf000875b68e37f6edeafaddb00199ca5507512727cadcb474b693a2",
      parent_digest:
        "0xd431ccdaf405136b9810ac783c5032ebb570a6048e25f44ebaa8fbea8ba54c2f",
      block_number: 7189,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:53:30Z",
      created_date: "2020-01-29T08:53:30Z",
      reward: 0,
      transaction_count: 0
    },
    {
      digest:
        "0xd431ccdaf405136b9810ac783c5032ebb570a6048e25f44ebaa8fbea8ba54c2f",
      parent_digest:
        "0x00acc700a9d5a1117d664fd9cfd7d704391ea1f8870e0b5d4b36e0b865c55ec1",
      block_number: 7188,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:53:20Z",
      created_date: "2020-01-29T08:53:20Z",
      reward: 0,
      transaction_count: 0
    },
    {
      digest:
        "0x00acc700a9d5a1117d664fd9cfd7d704391ea1f8870e0b5d4b36e0b865c55ec1",
      parent_digest:
        "0xfe68a23c9e270462622a4a70fc069af110f1098137432b2848c6aff2786cff57",
      block_number: 7187,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:53:10Z",
      created_date: "2020-01-29T08:53:10Z",
      reward: 0,
      transaction_count: 0
    },
    {
      digest:
        "0xfe68a23c9e270462622a4a70fc069af110f1098137432b2848c6aff2786cff57",
      parent_digest:
        "0x329bf1b19a1729471d17a82ba24b020f322c34b9a4e3d343c5a3814a4545ac6a",
      block_number: 7186,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:53:00Z",
      created_date: "2020-01-29T08:53:00Z",
      reward: 0,
      transaction_count: 0
    },
    {
      digest:
        "0x329bf1b19a1729471d17a82ba24b020f322c34b9a4e3d343c5a3814a4545ac6a",
      parent_digest:
        "0xb282bdec00ab0ee637c7002eab3fea0f3fe52747d997b0a555130ea200741025",
      block_number: 7185,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:52:50Z",
      created_date: "2020-01-29T08:52:50Z",
      reward: 0,
      transaction_count: 0
    },
    {
      digest:
        "0xb282bdec00ab0ee637c7002eab3fea0f3fe52747d997b0a555130ea200741025",
      parent_digest:
        "0xbfd97e27fdc3d2bf46700ac189f62d00ecba1145ab6535acf867ca9cabe0ae50",
      block_number: 7184,
      miner: "E48C4QKXWuLGybixkvuqHdWawBbSAQjfyh8JkgMaENWJu8mgH",
      merkle_hash:
        "0x46e4f088bfbd8210299e53acb1d365f8fbc491f24747e1386975e98ffb2201ce",
      timestamp: "2020-01-29T08:52:40Z",
      created_date: "2020-01-29T08:52:40Z",
      reward: 0,
      transaction_count: 0
    }
  ]
};

export const blockTransactionMock = {
  count: 1,
  next: null,
  previous: null,
  results: [
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
