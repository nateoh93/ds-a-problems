// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount, coins) {
    if (amount === 0) return 1;
    if (coins.length === 0) return 0;
    
    let lastCoin = coins[coins.length - 1];
    let total = 0
    for (let quantity = 0; quantity * lastCoin <= amount; quantity++) {
        total += change(amount-(quantity*lastCoin), coins.slice(0,-1))
    }
    return total;
}