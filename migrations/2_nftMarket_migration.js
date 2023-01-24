const NftMarket = artifacts.require('Migrations');

module.exports = function (deployer) {
  deployer.deploy(NftMarket);
};
