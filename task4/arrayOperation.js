let numbers = [123, 9, 27]

const arrayOperation = array => {
  let ar = array
  while (ar.length > 1) {
    let num = 0
    ar.map((v, i) => {
      num += v
    })
    ar = `${num}`.split('').map(Number)
  }
  console.log(ar)
}

arrayOperation(numbers)
