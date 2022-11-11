import { nanoid } from 'nanoid'

const passwordBtnEl = document.querySelector('button')
console.log(passwordBtnEl)
const randomPassword = nanoid()
console.log(randomPassword)

//Repare que estamos usando a sintaxe import/export no nosso arquivo. Para que a gente consiga utilizar essa sintaxe (ES Modules) no nosso código, precisamos adicionar a chave "type": "module" no arquivo package.json :