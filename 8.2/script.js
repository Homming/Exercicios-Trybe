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

const expected_result1 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft'
];

const expected_result2 = [
    {
      age: 31,
      author: 'Isaac Asimov'
    },
    {
      age: 38,
      author: 'H. P. Lovecraft'
    },
    {
      age: 39,
      author: 'Stephen King'
    },
    {
      age: 43,
      author: 'George R. R. Martin'
    },
    {
      age: 45,
      author: 'Frank Herbert'
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien'
    }
];

const expected_result3 = [
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
];

const expected_result4 = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    }
];

const expected_result5 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien'
];

function formatedBookNames() {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

function nameAndAge() {
    const authorAgeRelease = books.map((book) => {
        return {
            "age": book.releaseYear - book.author.birthYear,
            "author": book.author.name
        }
        
    });
    return authorAgeRelease.sort((a, b) => {
        return a.age - b.age;
    });
}
  
function fantasyOrScienceFiction() {
    return books.filter(book => book.genre === "Fantasia" || book.genre === "Ficção Científica");
}

function oldBooks() {
    const elderBooks = books.filter(book => (2020 - book.releaseYear) >= 60);

    return elderBooks.sort((a, b) => {
        return a.releaseYear - b.releaseYear;
    });
}

function fantasyOrScienceFictionAuthors() {
    const authorsFictionSCIFI = books.map((book) => {
        if (book.genre === "Fantasia" || book.genre === "Ficção Científica"){ 
            return book.author.name;
        }
    });
    
    return authorsFictionSCIFI.filter(author => author != undefined).sort();
}

assert.deepEqual(fantasyOrScienceFictionAuthors(), expected_result5);
assert.deepEqual(oldBooks(), expected_result4);
assert.deepEqual(fantasyOrScienceFiction(), expected_result3);
assert.deepEqual(nameAndAge(), expected_result2);
assert.deepEqual(formatedBookNames(), expected_result1);