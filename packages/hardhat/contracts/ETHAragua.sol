// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract ETHAragua is ERC721, Ownable {
    uint256 private _nextTokenId;
    string private _baseTokenURI = "ipfs://QmekpZA4ubdtE8YJ1sdKr9W4WiZK4z7zsFmRrtP2GrSDpr";

    constructor(address initialOwner) ERC721("ETH Aragua", "ETHA") Ownable(initialOwner) {}

    function safeMint() public returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        return tokenId;
    }

    function burn(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "only owner");
        _burn(tokenId);
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_ownerOf(tokenId) != address(0), "ERC721Metadata: URI query for nonexistent token");
        return _baseTokenURI;
    }
}
