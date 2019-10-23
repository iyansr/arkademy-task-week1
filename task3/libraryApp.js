let books = [
  {
    title: 'Marmut Merah Jambu',
    author: 'Raditya Dika',
    status: 'available'
  },
  {
    title: 'Rich People Problems',
    author: 'Kevin Kwan',
    status: 'empty'
  },
  {
    title: 'Memoirs Of Bossi',
    author: 'Lusiana Liu',
    status: 'available'
  },
  {
    title: 'Distance Blues',
    author: 'Agustine W.',
    status: 'empty'
  }
];

const getStatusByTitle = (title, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].title === title) {
      return array[i].status;
    }
  }
};

let result = getStatusByTitle('Distance Blues', books);
console.log(result);

const availableBooks = books.filter(data => data.status === 'available');
console.table(availableBooks);
