const minTimeToVisitAllPoints = (points: Array<Array<number>>) => {
  let sum = 0;

  for (let i = 0; i < points.length - 1; i++) {
    sum = sum + calculateDistance(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1]);
  }

  return sum;
};

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
  const yDiff = Math.abs(y2 - y1);
  const xDiff = Math.abs(x2 - x1);
  return xDiff > yDiff ? xDiff : yDiff;
};

const samples = [
  [
    [1, 1],
    [3, 4],
    [-1, 0],
  ],
  [
    [3, 2],
    [-2, 2],
  ],
  [],
  [
    [0, 0],
    [1, 0],
    [0, 0],
  ],
];

samples.forEach((sample) => {
  console.log(minTimeToVisitAllPoints(sample));
});
