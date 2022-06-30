require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/ZB594-roCVsLMG1RqS2yuLI4OAErjQgU',
      accounts: ['930ad47147fbe62fae672f2a940d510d59930d35326ff1d425571bbb59a13a07']
    }
  }
}