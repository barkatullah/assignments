pragma solidity ^0.6.2;
contract SimpleTokenTimelock is TokenTimelock {
    constructor () public TokenTimelock(
        IERC20(0x143D4863BFA9B2De0058abDE0F502442a5C417e8), // token
        0x1ba9D7a7Eecd848C91577B9632CE45Cc090F775C, // beneficiary
        1588934725) // TimeStamp
         {
            
        }
}
