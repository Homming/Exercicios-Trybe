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

const expected_result1 = 43;
const expected_result2 = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin'
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991
};


function allNames() {
    let authorsName = books.reduce((previousValue, currentValue) =>{
        if(previousValue.author !== undefined) return previousValue.author.name + `, ${currentValue.author.name}`
        return previousValue + `, ${currentValue.author.name}`;
    });
    return `Nomes: ${authorsName}.`;
}

function averageAge() {
   return books.reduce((previousValue, currentValue) => {
        return previousValue + (currentValue.releaseYear - currentValue.author.birthYear);
    }, 0) / books.length;
}
  
function longestNamedBook() {
    return books.reduce((previousValue, currentValue) => {
        if(previousValue.name.length < currentValue.name.length) return currentValue;
        else return previousValue;
    });
}

assert.deepEqual(longestNamedBook(), expected_result2);
assert.equal(averageAge(), expected_result1);
assert.deepEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");