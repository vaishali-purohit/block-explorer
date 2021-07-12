export const initialState = {
  loading: false,
  tokenTap: null,
  digest: null,
  status: null,
  errorMessage: null
};

export const sendTokenMock = {
  message: "Transfer pending",
  digest: "9b655a6a5e230d2f680d8277df025f95908a91d3c6ea8f05e7125ebe94de42ab"
};

export const sendTokenStatusMock = {
  status: "Executed"
};

export const tokenTapMock = {
  tokenTap: "true"
};
