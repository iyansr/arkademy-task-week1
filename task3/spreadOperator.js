let persons = [
  {
    name: 'Tatas',
    company: 'Arkademy',
    job: 'Trainer',
    status: 'single',
    city: 'Jogja'
  },
  {
    name: 'Pratama',
    company: 'Emago',
    job: 'Trainer',
    status: 'single',
    city: 'Jakarta'
  }
]
console.log('Before : ')
console.table(persons)

let changedPersonData = persons.map(data => {
  let returnVal = { ...data }

  switch (returnVal.name) {
    case 'Tatas':
      returnVal.status = 'maried'
      returnVal.city = 'Jakarta'
      break

    case 'Pratama':
      returnVal.company = 'Arkademy'
      returnVal.city = 'Jogja'
      break

    default:
      console.log('Data not found')
      break
  }
  return returnVal
})

console.log('After  (Original data): ')
console.table(persons)
console.log('After  (Changed data): ')
console.table(changedPersonData)
