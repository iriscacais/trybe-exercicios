// const button = document.querySelector('#signup-button');

// const registerUser = () => {
//   console.log('Registrado com sucesso!');
// };

// button.addEventListener('click', registerUser);

// Construímos uma função que simula o registro de uma nova pessoa e passamos como argumento de uma segunda função. Logo, addEventListener é uma HOF.
/////////

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
//   repeat(5, console.log);
  //Construímos essa função para implementar um laço de repetição entre 0 e um número especificado via parâmetro (number) e para mostrar no console o valor da variável count de 0 a N (number).

  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });
  // Pegamos a nossa implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função repeat, sendo:

// 1 - Um número até que ponto gostaríamos de testar, neste caso 3;

// 2 - Nossa ação que será executada quando chamada action(count) na nossa função repeat, neste caso uma função para testar nossos números.
const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
};
//Se quiser os ímpares:
const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };

  repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// Observe que apenas transportamos e ajustamos a lógica para identificar os números pares e ímpares em duas novas funções chamadas isEven e isOdd. Após isso, só alteramos o segundo parâmetro ao chamar a função repeat.

const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());

  //Ao executar esse código, não recebemos um número aleatório. Isso aconteceu porque na quinta linha do script nós imprimimos apenas a escrita da função. Como não realizamos sua execução, ela não seguiu os procedimentos para retornar um número aleatório. Para executarmos a função, teríamos que inserir () na frente do numberGenerator.



