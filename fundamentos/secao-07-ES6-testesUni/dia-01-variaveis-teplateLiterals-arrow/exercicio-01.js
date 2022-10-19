// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope}ifScope ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//   };  testingScope(false);

 const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = (array) => {
    for (index = 1; index < array.length; index += 1){
       for (index2 = 0; index2 < array.length; index2 += 1){
             if (array[index] < array[index2]) {
                let position = array[index];
                   array[index] = array[index2];
                    array[index2] = position;
    }
  }  }
  return array;
};
console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);