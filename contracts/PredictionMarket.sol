// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
}

contract PredictionMarket {
    enum Status { Active, Closed, Resolved, Cancelled }
    enum Outcome { Unresolved, Yes, No, Invalid }

    IERC20 public immutable collateral;
    address public immutable admin;
    string public question;
    string public resolutionSource;
    uint256 public endTime;
    uint256 public feeBps;
    Status public status;
    Outcome public outcome;

    mapping(address => uint256) public yesStake;
    mapping(address => uint256) public noStake;

    uint256 public totalYes;
    uint256 public totalNo;

    constructor(
        address collateral_,
        address admin_,
        string memory question_,
        string memory resolutionSource_,
        uint256 endTime_,
        uint256 feeBps_
    ) {
        collateral = IERC20(collateral_);
        admin = admin_;
        question = question_;
        resolutionSource = resolutionSource_;
        endTime = endTime_;
        feeBps = feeBps_;
        status = Status.Active;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "not admin");
        _;
    }

    modifier onlyActive() {
        require(status == Status.Active, "market inactive");
        require(block.timestamp < endTime, "market ended");
        _;
    }

    function buyYes(uint256 amount) external onlyActive {
        require(amount > 0, "amount=0");
        collateral.transferFrom(msg.sender, address(this), amount);
        yesStake[msg.sender] += amount;
        totalYes += amount;
    }

    function buyNo(uint256 amount) external onlyActive {
        require(amount > 0, "amount=0");
        collateral.transferFrom(msg.sender, address(this), amount);
        noStake[msg.sender] += amount;
        totalNo += amount;
    }

    function close() external {
        require(block.timestamp >= endTime || msg.sender == admin, "too early");
        require(status == Status.Active, "already closed");
        status = Status.Closed;
    }

    function resolve(Outcome outcome_) external onlyAdmin {
        require(status == Status.Closed, "not closed");
        require(outcome_ != Outcome.Unresolved, "bad outcome");
        outcome = outcome_;
        status = Status.Resolved;
    }

    function claim() external {
        require(status == Status.Resolved, "not resolved");
        uint256 payout;
        uint256 pool = totalYes + totalNo;

        if (outcome == Outcome.Yes) {
            require(yesStake[msg.sender] > 0, "no winning stake");
            payout = (pool * yesStake[msg.sender]) / totalYes;
            yesStake[msg.sender] = 0;
        } else if (outcome == Outcome.No) {
            require(noStake[msg.sender] > 0, "no winning stake");
            payout = (pool * noStake[msg.sender]) / totalNo;
            noStake[msg.sender] = 0;
        } else {
            payout = yesStake[msg.sender] + noStake[msg.sender];
            yesStake[msg.sender] = 0;
            noStake[msg.sender] = 0;
        }

        uint256 fee = (payout * feeBps) / 10_000;
        collateral.transfer(admin, fee);
        collateral.transfer(msg.sender, payout - fee);
    }
}
