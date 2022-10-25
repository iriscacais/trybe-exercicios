// Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

// Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função em branco.

// Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante.

const books = require('./books.js');

//1 Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//De olho na dica 👀: use a função find.

const authorBornIn1947 = (books) => {
    const obj = books.find((book) => {
     return book.author.birthYear === 1947;
    });
    return obj.author.name;
}; //console.log(authorBornIn1947(books));

// 2 Retorne o nome do livro de menor nome.
//De olho na dica 👀: use a função forEach.
function smallerName(books) {
    let smallerNameBook = books[0].name;
    
    books.forEach((book) => {
        if (book.name.length < smallerNameBook.length){
            smallerNameBook = book.name;
        }
    });
    return smallerNameBook;
  };
  //console.log(smallerName(books));
// como poderia fazer uma alternativa com sort?
const smallerNameUsingSort = (books) => {
    //negativo se book1 for menor que o book2
    // 0 se book1 for igual a book2
    // positivo se book 1 for maior que book2
    books.sort((book1, book2) => {
        return book1.name.length - book2.name.length;
    });
    return books[0].name;
};
//console.log(smallerNameUsingSort(books));

  //3 Encontre o primeiro livro cujo nome possui 26 caracteres.
  const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
          name: 'George R. R. Martin',
      birthYear: 1948,
    },
      releaseYear: 1991,
  };
  function getNamedBook(books) {
    const maiorTitulo = books.find((book) => {
        return book.name.length === 26
    });
    return maiorTitulo
  }; //console.log(getNamedBook(books));

  //4 Ordene os livros por data de lançamento em ordem decrescente.
  function booksOrderedByReleaseYearDesc(books) {
    books.sort((book1, book2) => {
        return book2.releaseYear - book1.releaseYear
    });
    return books;
  };
//console.log(booksOrderedByReleaseYearDesc(books));

//5 Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX(books) {
  return Object.values(books).every((book) => { book.author.birthYear >= 1901 || book.author.birthYear <= 2000 

  });

};
//console.log(everyoneWasBornOnSecXX(books))

//6 Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s(books) {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
};
console.log (someBookWasReleaseOnThe80s(books));

//7 Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
