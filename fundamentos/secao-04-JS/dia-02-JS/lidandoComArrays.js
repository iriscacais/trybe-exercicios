//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

//Some todos os valores contidos no array e imprima o resultado;

//Calcule e imprima a média aritmética dos valores contidos no array;

//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [6, 8, 2, 12, 70, 8, 100, 2, 34, 28];

for (let index =0; index < numbers.length; index +=1){
    //console.log(numbers[index])
}

let soma=0;
for (let index=0; index<numbers.length;index ++){
soma += numbers[index];
//console.log (soma)
}

let media = soma/numbers.length;
//console.log(media)
if (media>20){
    //console.log ('Valor maior que 20')
}else{
   //console.log ('Valor menor que 20')
}

let maiorNumero = numbers[0];

for (let index = 1; index <= numbers.length; index += 1){
    if (numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}
//console.log(maiorNumero)


let impares=[];
let pares =[]
for (let index =0; index <numbers.length; index +=1){

    if (numbers[index]%2 !== 0 ){
        impares.push(numbers[index]);
    }else if ( numbers[index]%2 == 0){
    pares.push(numbers[index]); 
    }
}
for (let index=0;index<impares.length;index+=1){
    if (impares.length<=0){
        console.log('Não há números ímpares')
    }else{
        console.log (impares.length)
    }
}
   
