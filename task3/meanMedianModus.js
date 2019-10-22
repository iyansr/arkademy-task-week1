let numbers = [2, 23, 43, 12, 6, 4, 10, 89, 32, 43, 32];

const getMean = array => {
  let totalAll = 0;
  for (let i = 0; i < array.length; i++) {
    //
    totalAll += array[i];
  }
  const result = totalAll / array.length;
  return result;
};
console.log('Average value: ', getMean(numbers));

const getMedian = array => {
  array.sort(function(a, b) {
    return a - b;
  });

  var half = Math.floor(array.length / 2);
  return array[half];
};
console.log('Middle number in array: ', getMedian(numbers));

const getModus = array => {
  if (array.length == 0) return null;
  let modeMap = {};
  let maxEl = array[0];
  let maxCount = 1;

  for (let i = 0; i < array.length; i++) {
    let el = array[i];

    if (modeMap[el] == null) {
      modeMap[el] = 1;
    } else {
      modeMap[el]++;
    }
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
};
console.log('Most frequent numbers: ', getModus(numbers));
