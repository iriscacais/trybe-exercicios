// const sum = (value1, value2) => value1 + value2;

// console.log (sum(2,3))

// imagine que nessa funço quem vai passar os valores
// é uma pessoa. Pessoas cometem erros, imagine que a pessoa insira valores como strigs. 

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, '3')); // resultado: 23

// Vamos adicionar uma condicional que impede a pessoa usuária de quebrar a calculadora.

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

//   Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw:

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

//   Percebeu a diferença? Agora a execução da função sum foi interrompida, e temos uma mensagem de erro no console, bem como uma indicação da linha onde esse erro ocorre.

// Você programou o código para lançar uma exceção caso aconteça um erro, mas o fluxo do código ainda pode ser melhorado. Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch. Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, 2));
  console.log(sum(2, '2'));