const { expect } = require("chai");

describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("MoNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://0x";
    await nft.deployed();
    await nft.mint("0x0x", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)   
  });
});
