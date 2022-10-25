// Vamos usar o forEach, para realizar a tabuada do 2. Veja o exemplo abaixo:
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
//No exemplo acima, foi executada, para cada elemento do array, a função multipliesFor2, que imprime o parâmetro element * 2 no console.
///////

//Agora estamos tratando de uma HOF, sendo assim é possível utilizar também os demais parâmetros para resolver um problema. Como se pode fazer isso? Veja este exemplo abaixo com o uso de index no forEach:

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]