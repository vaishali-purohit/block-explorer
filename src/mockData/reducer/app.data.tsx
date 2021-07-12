export const initialState = {
  refresh: null,
  access: null,
  loading: false,
  error: null,
  isSuccess: null,
  isLoad: false,
  loader: {
    open: false,
    title: undefined
  }
};

export const tokenMock = {
  refresh:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaYWE",
  access:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiUJj"
};

export const accessToken = {
  access:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIFCS59ALpJN2h98kw"
};
