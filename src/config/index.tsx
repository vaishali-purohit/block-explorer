import dotenv from "dotenv";

dotenv.config();

const config = url => {
  if (url) return url;

  const envToUrlMap = {
    devnet: process.env.REACT_APP_BACKEND_DEVNET_URL,
    mainnet: process.env.REACT_APP_BACKEND_MAINNET_URL,
    testnet: process.env.REACT_APP_BACKEND_TESTNET_URL
  };

  return envToUrlMap[process.env.REACT_APP_DEFAULT_NETWORK || "mainnet"];
};

export default config;
