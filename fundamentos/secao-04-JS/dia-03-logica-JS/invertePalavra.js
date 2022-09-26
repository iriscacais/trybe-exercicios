//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'iris';
let letras = [];
for (let index = 0; index < word.length; index +=1){
 letras.push(word[index]);
 
}
letras= letras.reverse()
console.log(letras)
letras = letras.join('');
console.log(letras)
