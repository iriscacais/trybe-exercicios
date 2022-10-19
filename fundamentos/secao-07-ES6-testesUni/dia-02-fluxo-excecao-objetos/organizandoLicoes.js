
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addTurnoLessons(obj,key,value){
   obj[key] = value;
}
addTurnoLessons(lesson2, 'turno', 'noite')
//console.log (lesson2)

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listarKeys = (objeto) => Object.keys(objeto)
//console.log(listarKeys(lesson1));

//Crie uma função para mostrar o tamanho de um objeto.

const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
//console.log (tamanhoObjeto(lesson1));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarValues = (objeto) => Object.values(objeto)
//console.log(listarValues(lesson1));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 

const allLessons = Object.assign ({},{lesson1, lesson2, lesson3 } )
//console.log(allLessons);
// O método "Object.assing()" recebe dois parametros, um objeto, e o que queremos atribuir à ele. Se no primeiro parametro passarmos um objeto vazio ele criará um objeto novo com as carateristicas do segundo parâmetro.

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const numeroEstudantes = (lessons) => {
const keys = Object.keys(lessons);
let total = 0;
for (index = 0; index < keys.length; index +=1){
    const currentlyKey = keys[index];
    total += lessons[currentlyKey].numeroEstudantes

}
return total
}
//console.log(numeroEstudantes(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
const valorChave = (obj, number ) => Object.values(obj)[number];
 // o "Object.values()" para criar um array com os valores do objeto, e então acessarmos a sua posição passando o índice.
 //console.log (valorChave(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verificaPar = (obj, key, value) => {
    const arr = Object.entries(obj);
    //console.log (arr)
    let verifica = false;
  for (let index in arr){
    if (arr[index][0] === key && arr[index][1] === value) verifica = true;
    
  }
   return verifica;
}

console.log(verificaPar(lesson2, 'professor', 'Carlos'))