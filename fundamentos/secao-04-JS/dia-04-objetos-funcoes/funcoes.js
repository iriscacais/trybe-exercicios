//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

//Um ângulo será considerado inválido se não tiver um valor positivo.

let a = 10
let b = 2
function sum(a, b) {
   return a + b;
  }
//console.log (sum(a,b))

function subtração(a, b) {
    return a - b;
   }
   //console.log(subtração(a,b))

   function Multiplicação(a, b) {
    return a * b;
   }
   //console.log(Multiplicação(a,b))

   function divisão(a, b) {
    return a / b;
   }
   //console.log(divisão(a,b))

   function modulo(a, b) {
    return a % b;
   }
   //console.log(modulo(a,b))
 
   let primeiroNum = 10;
   let segundoNum =20
   function maior(primeiroNum,segundoNum){
    if (primeiroNum > segundoNum){
       return primeiroNum + 'e maior que' + segundoNum;
    }else{
       return segundoNum + 'e maior que' + primeiroNum;    
   }}
/////
   let numeroUm= 28;
   let numeroDois = 30;
   let numeroTres = 4;

   function compar (numeroUm, numeroDois, numeroTres){
    if (numeroUm > numeroDois || numeroUm > numeroTres){
        return numeroUm + 'é o mairo número';
    } else if ( numeroDois>numeroUm || numeroDois> numeroTres){
        return numeroDois + 'é o maior número ';
    }else{
        numeroTres + 'é o mairo número';
    }
   }

   ////
   let valor = 10;
   function positivo (valor){
    if (valor >= 0){
        return 'positive';
    }else {
        return 'negative';
    }
   }