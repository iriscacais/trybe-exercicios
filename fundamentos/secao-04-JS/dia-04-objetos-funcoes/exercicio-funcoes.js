// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
    //Exemplo de palíndromo: arara
//verificaPalindrome('arara')
//Retorno esperado: true
//verificaPalindrome('desenvolvimento')
//Retorno esperado: false

function verificaPalindrome (palavra){
    let separa = palavra.split('');
    let inverte = separa.reverse('');
    let junta = inverte.join('');
    if ( junta === palavra){
        return (' true ');
    }else{
        return (' false ');
    }
}
//console.log (verificaPalindrome('arara'))
//console.log (verificaPalindrome(' desenvolvimento'))

///////////////////////////
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

function maiorValor(numeros){
let maiorIndice =[0]; 
   for (let key in numeros){
    if (numeros[key] > numeros[maiorIndice]){
maiorIndice = key;
    }
   }
   return maiorIndice;
}
//console.log (maiorValor([2, 3, 6, 7, 10, 1]))

////////////////
//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.
function menorValor(numeros){
    let menorIndice =[0]; 
       for (let key in numeros){
        if (numeros[key] < numeros[menorIndice]){
    menorIndice = key;
        }
       }
       return menorIndice;
    }
    //console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))
//////////////////
    //Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
    //Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
      //  Valor esperado no retorno da função: Fernanda.

      function maiorNome (nomes){
        let nomeCaracteres =0;
        for(let key in maiorNome){

    return nomeCaracteres
    }
      //console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
      }