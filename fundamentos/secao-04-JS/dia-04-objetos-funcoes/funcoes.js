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
 
   
   function maior(primeiroNum,segundoNum){
    if (primeiroNum > segundoNum){
       return primeiroNum + ' é maior que ' + segundoNum;
    }else{
       return segundoNum + ' é maior que ' + primeiroNum;    
   }}
//console.log (maior(10,5));

/////
  
   function compara (numeroUm, numeroDois, numeroTres){
    if (numeroUm > numeroDois || numeroUm > numeroTres){
        return numeroUm + ' é o mairo número ';
    } else if ( numeroDois>numeroUm || numeroDois> numeroTres){
        return numeroDois + ' é o maior número ';
    }else{
        numeroTres + ' é o mairo número ';
    }
   }
//console.log (compara(10,5,8));
   ////
 
   function positivo (valor){
    if (valor > 0){
        return 'positive';
    }else if ( valor < 0){
        return 'negative';
    }else {
        return 'valor é zero'
    }
   }
   //console.log (positivo(0));

/////
  function triangulo ( angulo1, angulo2, angulo3){
    if (angulo1 ===0 || angulo2 ===0 || angulo3 ===0){
        return 'valores inválidos'
    } else if (angulo1 + angulo2 + angulo3 === 180){
        return 'verdadeiro';
    }else{
        return 'nao é triangulo válido'
    }
   }
   
   console.log (triangulo (90,60,0))