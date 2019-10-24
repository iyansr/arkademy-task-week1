let numbers = [6, 22, 34, 15, 2, 13, 26, 57, 42, 32]

const minNumber = Math.min(...numbers)
console.log(minNumber)

const maxNumber = Math.max(...numbers)
console.log(maxNumber)

//ascending sort
numbers.sort((a, b) => {
  return a - b
})
console.log(numbers)

//descending sort
numbers.sort((a, b) => {
  return b - a
})
console.log(numbers)
