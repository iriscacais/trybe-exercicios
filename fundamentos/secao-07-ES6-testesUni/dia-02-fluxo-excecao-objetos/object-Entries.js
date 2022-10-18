// Uma maneira de interagir com objetos é por meio do Object.entries. que retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto. Ficou confuso? Não se preocupe, vamos ao nosso exemplo e ver qual seria a saída:

const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow));

//   Como você pode perceber, ao aplicar o Object.entries no nosso objeto, o retorno foi um array de arrays, onde a primeira entrada de cada array é a chave do objeto em formato de string, e o segundo valor é seu respectivo valor, que pode ser uma string ou outro tipo de dado, como por exemplo o número de temporadas do exemplo, que é um number.

/////

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);
  console.log(Object.values(países));

//   Observe que o retorno dele é um array e que cada um de seus elementos é um outro array com apenas dois dados: a chave do objeto e o seu valor. Para ver os valores separadamente, adicione o for abaixo ao código anterior e execute-o novamente.

for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

  const starships = {
    option1: "Tardis",
    option2: "Millennium Falcon",
    option3: "Enterprise",
    option4: "Heart of Gold"
  }
  console.log(Object.values(starships) );
  

const top3Albums = {
    1: 'Nightfall in Middle-Earth',
    2: 'Imaginations from the Other Side',
    3: 'Somewhere Far Beyond',
  };
  console.log(Object.entries(top3Albums))

  const band = {
    name: 'Blind Guardian',
    formedIn: 1986,
    lastAlbum: 'Beyond the Red Mirror',
  };
  
  const info = {
    genre: 'Power Metal',
    lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
  };
  console.log (Object.assign(band, info))
  