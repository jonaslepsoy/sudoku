const grid = [
  [0,0,0,3,4,0,5,6,0],
  [9,0,0,0,0,0,1,0,0],
  [0,0,0,7,0,6,0,3,8],
  [7,0,0,0,0,9,0,0,0],
  [0,0,0,5,6,7,0,0,0],
  [0,0,0,1,0,0,0,0,4],
  [6,7,0,8,0,3,0,0,0],
  [0,0,8,0,0,0,0,0,2],
  [0,3,1,0,2,4,0,0,0]
];

const possible = (y,x,n) => {
  for (let i = 0;i < 9;i++) {
    if (grid[y][i] === n) {
      return false;
    }
  }
  for (let i = 0;i < 9;i++) {
    if (grid[i][x] === n) {
      return false;
    }
  }
  let x0 = Math.floor(x / 3) * 3;
  let y0 = Math.floor(y / 3) * 3;
  for (let i = 0;i < 3;i++) {
    for (let j = 0;j < 3;j++) {
      if (grid[y0 + i][x0 + j] === n) {
        return false
      }
    }
  }
  return true;
}

const solve = () => {
  for (let y = 0;y < 9;y++) {
    for (let x = 0;x < 9;x++) {
      if (grid[y][x] === 0) {
        for (let n = 1;n <= 9;n++) {
          if (possible(y,x,n)) {
            grid[y][x] = n;
            solve();
            grid[y][x] = 0;
          }
        }
        return;
      }
    }
  }
  console.log(grid);
}

solve();
