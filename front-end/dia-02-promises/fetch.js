//fetch(URL, {}) // RECEBE DOIS PARAMETROS, A URL QUE É OBRIGATÓRIA - ENDEREÇO DA API E UM OBJETO DE CONFIGURAÓES SENDO OPCIONAL - NECESSÁRIO OLHAR A DOCUMENTAÇAO PARA VERIFICAR SE É NECESSÁRIO OU NAO. 
import fetch from "node-fetch";
fetch("https://dummyjson.com/quotes/random")
.then((response) => response.json())
.then((data) => console.log(`${data.quote} | ${data.author})`))
.catch(error => console.log(error))

fetch("https://api.goprogram.ai/inspiration")
//   .then(response => console.log(response)); // aqui temos de retorno um objeto do tipo response. Para conseguir acessar as informaçoes retornadas podemos usar o .jason() que também vai retornar uma promise e portanto precisaremos de mais um .then!
.then(response => response.json())
  .then(data => console.log(`"${data.quote}" | ${data.author}`));