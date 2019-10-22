const arrayOperation = () => {
  let numbers = [123, 9, 27];
  let totalAll = 0;
  let n = [];
  if (numbers.length === 1) {
    return (n = [numbers[0]]);
  } else {
    for (let i = 0; i < numbers.length; i++) {
      //
      totalAll += numbers[i];
      n = ('' + totalAll).split('').map(Number);
    }
    return n;
    // numbers = n;
  }
};

console.log(arrayOperation());
