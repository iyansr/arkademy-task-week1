const ConvertToBinary = num => {
  let bits = []; //Store binary
  let remainder = 0;
  while (num >= 2) {
    remainder = num % 2;
    bits.push(remainder);
    num = (num - remainder) / 2;
  }
  bits.push(num);
  bits.reverse();
  return console.log(bits.join(''));
};

ConvertToBinary(12);
