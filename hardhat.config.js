require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      hardhat: {
        forking: {
          url: process.env.ETH_URL,
          blockNumber: 14390000,
          chainId: 1,
          hardfork: "cancun",
        }
      }
      // forking: {
      //   url: process.env.ETH_URL,
      //   blockNumber: 20450000
      // },
      // chainId: 1,
      // hardfork: "cancun"
    },
  },
  solidity: "0.8.24",
};