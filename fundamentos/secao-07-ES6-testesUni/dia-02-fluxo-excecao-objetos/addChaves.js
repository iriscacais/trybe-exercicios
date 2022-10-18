const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

//   Imagine um cenário em que você precisa completar as informações do cliente adicionando uma nova propriedade para armazenar seu sobrenome. Existem outra forma de adicionar essa propriedade de maneira simples e prática, sem a necessidade de reescrever o objeto e suas propriedades. Veja o exemplo abaixo:

// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer1);
  
//   customer1.lastName = 'Faria';
//   console.log(customer1);
  
//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

//   sintaxe abaixo:
//   objeto.nomeDaPropriedade.
//   objeto[variavelQueContemONomeDaPropriedade].

// Agora, suponha que seja necessário adicionar algumas novas propriedades ao objeto, como a naturalidade, a data de nascimento e o estado civil.

// Essas novas propriedades serão adicionadas de acordo com o valor de algumas variáveis.



  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);