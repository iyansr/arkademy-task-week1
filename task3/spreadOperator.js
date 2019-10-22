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
];
console.log('Before : ');
console.log(persons);
console.log('\n============================\n');

let changedPersonData = persons.map(data => {
  let returnVal = { ...data };

  switch (data.name) {
    case 'Tatas':
      data.status = 'maried';
      data.city = 'Jakarta';
      break;

    case 'Pratama':
      data.company = 'Arkademy';
      data.city = 'Jogja';
      break;

    default:
      console.log('Data not found');
      break;
  }
  return returnVal;
});

console.log('After : ');
console.log(persons);
