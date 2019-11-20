const maxIncreaseKeepingSkyline = (grid: number[][]) => {
  let rowMaxSkyline = []; //keeps the maximum height for each row
  let colMaxSkyline = []; //keeps the maximum height for each column
  let answer = 0;
  for (const row of grid) {
    let maximum = -1111;
    for (const rowElement of row) {
      if (rowElement > maximum) maximum = rowElement;
    }
    rowMaxSkyline.push(maximum);
  }

  for (let i = 0; i < grid[0].length; i++) {
    let maximum = -1111;
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] > maximum) maximum = grid[j][i];
    }
    colMaxSkyline.push(maximum);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (
        colMaxSkyline[j] >= rowMaxSkyline[i] &&
        grid[i][j] < rowMaxSkyline[i]
      ) {
        answer = answer + rowMaxSkyline[i] - grid[i][j];
        grid[i][j] = rowMaxSkyline[i];
      }
    }
  }

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (
        rowMaxSkyline[j] >= colMaxSkyline[i] &&
        grid[j][i] < colMaxSkyline[i]
      ) {
        answer = answer + colMaxSkyline[i] - grid[j][i];
        grid[j][i] = colMaxSkyline[i];
      }
    }
  }
  return answer;
};

maxIncreaseKeepingSkyline([
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
]);

maxIncreaseKeepingSkyline([
  [3, 0, 8],
  [2, 4, 5],
  [9, 2, 6],
  [0, 3, 1],
]);
