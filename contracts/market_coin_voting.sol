//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract CoinSentiment {
    address public owner;
    string[] public tickerArray;

    constructor() {
        owner = msg.sender;
    }

    struct ticker {
        bool exists;
        uint256 up;
        uint256 down;
        mapping(address => bool) Voters; // One voter can Vote one time only
    }

    event tickerupdate(uint256 up, uint256 down, address voter, string ticker);

    mapping(string => ticker) private Tickers;

    function addTicker(string memory _ticker) public {
        require(msg.sender == owner, "Only owner can create Ticker");
        ticker storage newTicker = Tickers[_ticker];
        newTicker.exists = true;
        tickerArray.push(_ticker);
    }

    function vote(string memory _ticker, bool _vote) public {
        require(Tickers[_ticker].exists, "Can't Vote on this Coin");
        ticker storage t = Tickers[_ticker];
        t.Voters[msg.sender] = true;
        if (_vote) {
            t.up++;
        } else {
            t.down++;
        }

        emit tickerupdate(t.up, t.down, msg.sender, _ticker);
    }

    function getVotes(string memory _ticker)
        public
        view
        returns (uint256 up, uint256 down)
    {
        require(Tickers[_ticker].exists, "No such Ticker Found");
        ticker storage t = Tickers[_ticker];
        return (t.up, t.down);
    }
}
