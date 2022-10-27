// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

const numberGenerator = (numeroApostado, callback) => {
const numeroAleatorio = Math.floor(Math.random()* (5 - 1 + 1) + 1) //colocando +1 ele vai incluir também o número 5. Para gerar o valor minímo vou somar +1 (no caso meu valor minimo é um)no valor final. Porém assim será necessário subtrair o -1 para não ultrapassar o valor maximo de 5 que estava estabelecido. 

return callback(numeroApostado, numeroAleatorio) ? 'Parabéns você ganhou' : 'Tente novamente'
}

const verificaIgualdade = (numeroApostado, numeroAleatorio) => numeroAleatorio === numeroApostado;

console.log(numberGenerator(3,verificaIgualdade))