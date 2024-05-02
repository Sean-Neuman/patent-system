// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract MyToken is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor(
        address initialOwner
    ) ERC721("MyPatent", "MPAT") Ownable(initialOwner) {}

    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // Function to get all token URIs
    function getAllTokenURIs() external view returns (string[] memory) {
        string[] memory uris = new string[](_nextTokenId);
        for (uint256 i = 0; i < _nextTokenId; i++) {
            uris[i] = tokenURI(i);
        }
        return uris;
    }

    function getAllTokenURIsByAddress(
        address to
    ) external view returns (string[] memory) {
        uint256 count = 0;
        // First pass: count the number of tokens owned by the address
        for (uint256 i = 0; i < _nextTokenId; i++) {
            if (_ownerOf(i) == to) {
                count++;
            }
        }

        // Second pass: allocate array and populate it
        string[] memory uris = new string[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < _nextTokenId; i++) {
            if (_ownerOf(i) == to) {
                uris[index] = tokenURI(i);
                index++;
            }
        }

        return uris;
    }

    // Public function to get the current value of _nextTokenId
    function getNextTokenId() public view returns (uint256) {
        return _nextTokenId;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
