// Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino. Sua estrutura é:

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!


// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };
  
//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };
  
//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };
  
//   Object.assign(person, info, family)
//   console.log(person)

//   Como você pode ver, o método Object.assign adicionou todas as propriedades de info e de family ao objeto person. Observe também que a chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info. Isso acontece quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, de forma que a propriedade do objeto destino sempre utilizará o último valor disponível. 

////

const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }

//   Como pôde ver acima, o clone é exatamente igual ao objeto person, e se você mudar qualquer propriedade nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o próprio objeto destino, que foi alterado adicionando as novas propriedades.

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }
