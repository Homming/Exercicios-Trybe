const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result2 = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: { name: 'Stephen King', birthYear: 1947 },
      releaseYear: 1986
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928
    }
  ] ;

  const expected_result1 = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin'
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991
  };

function authorBornIn1947() {
  const nameAuthor = books.find((book) => {
    return book.author.birthYear === 1947;
  });
  return nameAuthor.author.name;
}

function smallerName() {
    let nameBook;
    nameBook = books[0].name;
    books.forEach((book) => {
        if(book.name.length < nameBook.length){
            nameBook = book.name;
        }
    });
    return nameBook;
  }

  function getNamedBook() {
     return books.find((book) => {
        return book.name.length === 26;
    })
  }

  function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => {
        return b.releaseYear - a.releaseYear;
    });
  }

  function everyoneWasBornOnSecXX() {
    return books.every((book) => {
        return book.author.birthYear >= 1901 && book.author.birthYear < 2000;
    })
  }

  function someBookWasReleaseOnThe80s() {
    return books.some((book) => {
        return book.releaseYear < 1990 && book.releaseYear > 1979;
    })
  }

  function authorUnique() {
    let unico = true;
    books.some((book) => {
        books.some((otherBook) => {
            if(book.author.birthYear === otherBook.author.birthYear && book.id !== otherBook.id) {
                unico = false;
            }
        })
    })
    return unico;
  }
  
assert.equal(authorUnique(), false);
assert.equal(someBookWasReleaseOnThe80s(), true); 
assert.equal(everyoneWasBornOnSecXX(), false);
assert.deepEqual(booksOrderedByReleaseYearDesc(), expected_result2);  
assert.deepEqual(getNamedBook(), expected_result1); 
assert.equal(smallerName(), 'Duna');
assert.equal(authorBornIn1947(), 'Stephen King');