const isPrime = number => {
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i == 0) return false
  }
  return true
}

const primesTriangle = length => {
  if (length > 0 && length < 10) {
    const arr = []
    let str = ''
    for (let i = 2; arr.length < length; i++) {
      if (isPrime(i)) {
        str += `${i} `
        arr.push(str.trim())
      }
    }
    arr.forEach(val => console.log(val))
  } else {
    console.log('length must higher than 0 and less than 10')
  }
}

primesTriangle(9)
