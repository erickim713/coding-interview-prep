const minCostClimbingStairs = (costs: number[]) => {
  costs.push(0);
  const costMemory = new Array(costs.length);
  costMemory[0] = costs[0];
  costMemory[1] = costs[1];

  for (let i = 2; i < costs.length; i++) {
    costMemory[i] = Math.min(costMemory[i-2] + costs[i], costMemory[i - 1] + costs[i]);
  }
  return costMemory[costs.length - 1];
}

console.log(minCostClimbingStairs([10, 15, 20]));