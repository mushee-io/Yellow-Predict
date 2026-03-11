// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./PredictionMarket.sol";

contract MarketFactory {
    address public immutable admin;
    address public immutable collateral;
    address[] public allMarkets;

    event MarketCreated(address indexed market, string question, uint256 endTime);

    constructor(address collateral_) {
        admin = msg.sender;
        collateral = collateral_;
    }

    function createMarket(
        string calldata question,
        string calldata resolutionSource,
        uint256 endTime,
        uint256 feeBps
    ) external returns (address market) {
        require(msg.sender == admin, "not admin");
        PredictionMarket created = new PredictionMarket(
            collateral,
            admin,
            question,
            resolutionSource,
            endTime,
            feeBps
        );
        market = address(created);
        allMarkets.push(market);
        emit MarketCreated(market, question, endTime);
    }

    function marketsLength() external view returns (uint256) {
        return allMarkets.length;
    }
}
