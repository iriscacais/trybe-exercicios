const pessoas = [ 'joicy', 'joel', 'ronald'];

// quero passar todos para letras maiusculas:

const novasPessoas = pessoas.map((element) => element.toUpperCase());
//console.log(novasPessoas);

// a partir desse array quero criar um registro de pessoas e empresas.
// criando um objeto com chaves de nomes e pessoas. usando o map é possivel 

const novosTrabalhadores = pessoas.map((element) => {
    const registro = {};
    registro.nome = element;
    registro.empresa = 'trybe';
    return registro;
});
//console.log(novosTrabalhadores)

////// 
// diferença entre fazer a mesma função usando for e map:
// const persons = [
//     { firstName: 'Maria', lastName: 'Ferreira' },
//     { firstName: 'João', lastName: 'Silva' },
//     { firstName: 'Antonio', lastName: 'Cabral' },
//   ];
  
//   const fullNames = [];
  
//   for (let index = 0; index < persons.length; index += 1) {
//     fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
//   }
  
//   console.log(fullNames);
  //agora com map:
  const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  //console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
  
  // Suponha que é preciso transformar todos os números em negativos e passá-los para um array novo.
  const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

//console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
//console.log(numbers); // [ 1, 2, 3, 4, -5 ]
// o novo array retornado pelo map sempre tem o mesmo tamanho!!
// porém nao modifica o array original

// Também é possível com o map unir dois arrays para criar um novo!
//Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
//console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

////////////////////////
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];
  
  //Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
  const allNameStudents = estudantes.filter((estudante) => (
    estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  
  //console.log(allNameStudents);

  // primeiro usou o filter para filtrar todas as pessoas que estudam no período manha. O retorno de filter é um array portanto pode-se usar o map em seguida para retornar os nomes completos. Nesse caso o map é usado para retornar as informacoes, enquanto que o filter é usado para percorrer o array.

  // usando find junto com map --- Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
  const reportStatus = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
      `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  
  console.log(reportStatus('Natalia', estudantes));
  // Primeiro foi feito um find pora buscar e retornar os dados do estudante. O objeto goi retornado e salvo na variavel nova studentInfo. Depois o map foi usado para percorrer as materias do objeto e savar o nome da materia mais o resultado de aprovado ou reprovado de acordo com a nota (ser maior ou igual a 60.) 
