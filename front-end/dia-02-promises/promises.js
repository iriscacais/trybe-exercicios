const generateRandomNumber = () => Math.round(Math.random() *10);
//promisse resolvida
const resolvedPromise = () => new Promise((resolve,reject) =>{
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        resolve(randomNumber);
    }, 1000)
})
//console.log(resolvedPromise()) // até aqui ela retorna como pendente. Para isso usaremos o resolve r o reject!

//resolvedPromise().then((response) =>{
// o response tem o mesmo valor de resolve! E ele vai retornar a funçao resolvida. 
//console.log( `O número gerado é ${response}`)
//}) // passo o valor no resolve e recebo ele no response!
// se temos algum erro, usaremos o reject: 

const rejectedPromise = () => new Promise((resolve,reject) =>{
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        reject(new Error( `o número ${randomNumber} nao é válido`));
    }, 1000)
});

// rejectedPromise().then((response) => {
//     console.log(`rejectedPromise: O número geraddo é ${response}`)
// })
// .catch((error) => {
//     console.log(`RejectedPromise: ${error.message}`);
// });

// como tratar esse método rejeitado? Usando além do then o catch:
// quando o número for par a promise vai ser resolvida, se impar rejeitada:

const randomPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if(randomNumber % 2 === 0){
            resolve(randomNumber)
        } else {
            reject (new Error(`O número ${randomNumber} nao é valido`))
        }
    })
})
randomPromise()
.then(response => {
    console.log(`Promise resolvida. O número gerado é ${response}`)
})
.catch(error => {
    console.log(`Promise rejeitada: ${error.message}`)
})