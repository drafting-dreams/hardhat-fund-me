require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-solhint")
require("hardhat-deploy")
require("dotenv").config()

const {
    GOERLI_RPC_URL,
    PRIVATE_KEY,
    COINMARKETCAP_API_KEY,
    ETHERSCAN_API_KEY,
} = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.8",
    // solidity: {
    //   compilers: [
    //     {version: "0.8.8"},
    //   ]
    // }
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
    },
    gasReporter: { enabled: true },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
}
