//prettier-ignore
let m = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

const transpose = array => {
  return array[0].map((_, c) => array.map(r => r[c]));
};

console.log(transpose(m));
