var DataVerifiable = artifacts.require("./DataVerifiable.sol");
var EternalStorage = artifacts.require("./EternalStorage.sol");
var Organisation = artifacts.require("./Organisation.sol");
var OrganisationUpdated = artifacts.require("./OrganisationUpdated.sol");
var Ownable = artifacts.require("./Ownable.sol");
var Parent = artifacts.require("./Parent.sol");
var ProposalsLibrary = artifacts.require("./ProposalsLibrary.sol");
var SecurityLibrary = artifacts.require("./SecurityLibrary.sol");
var TokenLedger = artifacts.require("./TokenLedger.sol");

module.exports = function(deployer, network, accounts) {

  deployer.then(() => { 
  
    return deployer.deploy(DataVerifiable)
      .then(() => {
        return deployer.deploy(Ownable)
      })
      .then(() => {
        return deployer.deploy(EternalStorage)
      })
      .then(() => {
        return deployer.deploy(TokenLedger)
      })
      .then(() => {
        return deployer.deploy(OrganisationUpdated, TokenLedger.address, EternalStorage.address)
      })
      .then(() => {
        return deployer.deploy(ProposalsLibrary)
      })
      .then(() => {
        return deployer.deploy(SecurityLibrary)
      })
      .then(() => {
        return deployer.link(ProposalsLibrary, Organisation)
      })
      .then(() => {
        return deployer.link(SecurityLibrary, Organisation)
      })
      .then(() => {
        return deployer.deploy(Organisation, TokenLedger.address, EternalStorage.address)
      })
      .then(() => {
        return deployer.link(ProposalsLibrary, Parent)
      })
      .then(() => {
        return deployer.link(SecurityLibrary, Parent)
      })
      .then(() => {
        return deployer.deploy(Parent)
      })
  })

  // deployer.deploy(DataVerifiable);
  // deployer.deploy(EternalStorage);
  // deployer.deploy(OrganisationUpdated);
  // deployer.deploy(Ownable);
  // deployer.deploy(TokenLedger);

  // deployer.deploy(ProposalsLibrary);
  // deployer.deploy(SecurityLibrary);
  // deployer.link(ProposalsLibrary, Organisation);
  // deployer.link(SecurityLibrary, Organisation);
  // deployer.deploy(Organisation);

  // deployer.link(ProposalsLibrary, Parent);
  // deployer.link(SecurityLibrary, Parent);
  // deployer.deploy(Parent);
}
