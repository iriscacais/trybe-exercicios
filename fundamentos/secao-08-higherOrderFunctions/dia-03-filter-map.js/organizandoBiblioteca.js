const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
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
        birthYear: 1947,
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
  
// Adicione o código do exercício aqui:
// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// De olho na dica 👀: Use a função map

function formatedBookNames(books) {
  const formatedBooks = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
//console.log(formatedBooks)
}; 
formatedBookNames(books)

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.
// De olho na dica 👀: use as funções map, sort
function nameAndAge(books) {
 return books.map((book) => ({
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }))
   .sort((a,b) => a.age > b.age ? 1 : -1);
   
  }; 
// console.log(nameAndAge(books))

//Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
//De olho na dica 👀: use a função filter;
function fantasyOrScienceFiction(books) {
 return books.filter((book) => { 
  return book.genre === 'Fantasia' || book.genre === 'Ficção Científica'})
};
//console.log(fantasyOrScienceFiction(books));

//Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
//De olho na dica 👀: use as funções filter e sort
function oldBooksOrdered(books) {
  return books.filter ((book) => {
    return (2022 - book.releaseYear) > 60
  }).sort((a,b) => a < b ? 1 : -1)
};
//console.log(oldBooksOrdered(books))

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors() {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
    .filter((book) => wantedGenres.includes(book.genre))
    .map((book) => book.author.name).sort();
}
//console.log(fantasyOrScienceFictionAuthors(books))

//  Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks(books) {
  return books.filter ((book) => (2022 - book.releaseYear) > 60)
  .map((book) => book.name)
    
}
//console.log(oldBooks(books))

//Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
//De olho na dica 👀: cada inicial termina com um ponto.
function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  )).name;
}

/////  Devemos primeiro encontrar o nome do livro que contenha três pontos no início. O primeiro caractere ponto vem no índice 1. Após esse caractere temos um espaço, outra letra e então o outro ponto, que se encontra no índice 4. O terceiro ponto segue a mesma lógica e fica no índice 7. Vamos colocar essa condicional dentro da callback function da função find.