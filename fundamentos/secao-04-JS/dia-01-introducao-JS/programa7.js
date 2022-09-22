let num1 = 20;
let num2 = 20;
let num3 = 20;

if (num1>num2 && num1>num3){
    console.log ('O número' + '' + num1 + '' + 'é o maior');
}else if (num2>num1 && num2 >num3){
    console.log ('O número' + '' + num2 + '' +'é o maior');
}else if ( num3>num1 && num3>num2){
    console.log ('O número' + '' + num3 + '' + 'é o maior');
}else {
    console.log ('Os números são iguais');
}

//Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.