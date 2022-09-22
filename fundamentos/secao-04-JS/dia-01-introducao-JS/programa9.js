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