// O Object.values lista os valores de cada chave. Por exemplo, como faríamos para listar os valores de cada chave do nosso objeto coolestTvShow? Utilizando o for...in, seria algo como:

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
//   for (const property in coolestTvShow) {
//     console.log(coolestTvShow[property]);
//   }

console.log(Object.values(coolestTvShow));

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  const listSkillsValuesWithValues = (student) => Object.values(student);
  console.log(listSkillsValuesWithValues(student));