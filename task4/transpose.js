//prettier-ignore
let m = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

const transposeMatrix = matrix => {
  let m = [];

  for (let i = 0; i < matrix.length; i++) {
    m.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      m[j].push(matrix[i][j]);
    }
  }
  return m;
};

console.table(transposeMatrix(m));
