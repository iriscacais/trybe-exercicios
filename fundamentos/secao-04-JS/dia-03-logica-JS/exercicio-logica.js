let valorInicial = 10;
let fatorialDez=0;
let listaDecremento= [];

for ( let index= 1; index <= valorInicial; index +=1){
listaDecremento.push([index]); 

for (let indexF =0; indexF < listaDecremento.length; indexF +=1){
fatorialDez *= listaDecremento[indexF];
}
}
console.log(fatorialDez)
console.log(listaDecremento)