/**
 * Implemente uma função `summationOf(number)`que recebe um número inteiro e retorna o seu somatório\
 * 
 * Por exemplo:
 * 
 * -`summationOf(1)`retorna 1: soma de 1 até 1 = 1
 * -`summationOf(3)`retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6
 * -`summationOf(5)`retorna 15: soma de 1 até 3 = 1 + 2 + 3 + 4 + 5 = 15
 * - Se eu recebo um undefined devo receber um erro
 */

const summationOf = (number) => {
    if(number === undefined){
        throw new Error('a funçao precisa ter um parametro') // é a primeira coisa pq se for undefined já termina aqui.
    }
   let sum = 0;
   for(let index = 1; index <= number; index += 1) {
    sum += index;
   }
   return sum;
};


module.exports = summationOf;