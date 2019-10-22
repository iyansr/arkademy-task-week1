function multiplyMatrices(m1, m2) {
  let aNumRows = m1.length,
    aNumCols = m1[0].length,
    bNumRows = m2.length,
    bNumCols = m2[0].length;
  let result = [];

  if (m1.length !== m2[0].length) {
    console.log('Matrices cannot be multiplied 🙁 ');
  } else {
    for (let i = 0; i < aNumRows; i++) {
      result[i] = [];
      for (let j = 0; j < bNumCols; j++) {
        let sum = 0;
        for (let k = 0; k < aNumCols; k++) {
          sum += m1[i][k] * m2[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }
}

//prettier-ignore
let m1 = [
  [3, 4], 
  [1, 2],
];
//prettier-ignore
var m2 = [
  [7, 5], 
  [6, 4],
  [6, 4]
];

var mResult = multiplyMatrices(m1, m2);

console.table(mResult); /* it shows the matrix in a table */
