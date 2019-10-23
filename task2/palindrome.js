function countPalindrome(string1, string2) {
  let count = 0;
  function check(string) {
    while (string.length >= string2.length) {
      if (string2 === string.substring(0, string2.length)) {
        count++;
      }
      string = string.substring(1);
    }
  }
  check(string1);

  //prettier-ignore
  check(string1.split('').reverse().join(''));
  return count + ' Kali';
}

console.log(countPalindrome('banananana', 'nana'));
