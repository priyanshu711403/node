function knapsack(weights, values, capacity) {
   const n = weights.length;
   const dp = Array(n + 1)
      .fill(0)
      .map(() => Array(capacity + 1).fill(0));
   for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
         if (weights[i - 1] <= w) {
            dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
         } else {
            dp[i][w] = dp[i - 1][w];
         }
      }
   }
   return dp[n][capacity];
}
//test cases
const weights = [1, 2, 3];
const values = [10, 15, 40];
const capacity = 6;
console.log(knapsack(weights, values, capacity));
//max value with this test case is 65, answer in question was mistyped sample
