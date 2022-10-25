// Por exemplo: imagine que você tem um array de objetos. Cada objeto é um estudante com seu nome, nota e situação no curso. Para ser aprovado, ele precisa obter uma nota acima de 60. Como você pode ver, o objeto abaixo está desatualizado e precisa ser atualizado: ele não contém a informação acerca da aprovação. Para atualizá-lo, você provavelmente escreveria algo assim, utilizando loops:

// const students = [
//     { name: 'Maria', grade: 70, approved: '' },
//     { name: 'José', grade: 56, approved: '' },
//     { name: 'Roberto', grade: 90, approved: '' },
//     { name: 'Ana', grade: 81, approved: '' },
//   ];
  
//   function verifyGrades() {
//     for (let index = 0; index < students.length; index += 1) {
//       const student = students[index];
//       if (student.grade >= 60) {
//         student.approved = 'Aprovado';
//       } else {
//         student.approved = 'Recuperação';
//       }
//     }
//   }
  
//   verifyGrades();
  
//   console.log(students);

  //Usando forEach, é assim que você faria a mesma coisa:

  const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students);
//   Tudo o que você precisa fazer é chamar a função forEach no array e passar para ela a função que você criou. E mais nada! Esse é o poder da função forEach. 😎

///////

// Mais um exemplo utilizando outro tipo de HOF. Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.

// Primeiro, usando for e if:
// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// let firstMultipleOf5;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 5 === 0) {
//     firstMultipleOf5 = numbers[index];
//     break;
//   }
// }

// console.log(firstMultipleOf5);

//Agora, a mesma coisa usando Array.find:

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50
//Ponto de observação: note que o parâmetro passado para numbers.find(), number => number % 5 === 0 é uma arrow function, igual no primeiro exemplo de forEach, em que foi passada a função verifyGrade.

/////

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// });

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

// Suas partes:
// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF pode ser .find, .some, .every;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); - função a ser executada.

//Observe abaixo que podemos passar mais de um parâmetro para a função também. As HOFs disponibilizam para você, caso precisar, acesso a mais informações do array:
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});
