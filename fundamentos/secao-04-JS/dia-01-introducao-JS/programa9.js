let angulo1 = 2;
let angulo2 = 4;
let angulo3 = 4;
let soma = angulo1+angulo2+angulo3

let todosAngulosPositivos = angulo1>0 && angulo2>0 && angulo3>0;
if (todosAngulosPositivos){
    if (soma == 180){
    console.log (true);
}else {
    console.log (false);
}}

//🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.