let arrayOfObject = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 40
  },
  {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 19
  }
];
console.log(arrayOfObject);

//Add item to array
arrayOfObject.push({
  firstName: 'Bruce',
  lastName: 'Banner',
  age: 46
});
console.log(arrayOfObject);

//Delete item from array
arrayOfObject.splice(1, 1);
console.log(arrayOfObject);

//Change value of array
arrayOfObject[0].firstName = 'Robert';
arrayOfObject[0].lastName = 'Downey Jr';
arrayOfObject[0].age = 54;
console.log(arrayOfObject);
