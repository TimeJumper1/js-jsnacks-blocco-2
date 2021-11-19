let arrayNew = []
let arraySomma = 0
while ( arraySomma < 50){ 
    userNumber = parseInt(prompt('inserisci un numero'))
    arrayNew.push(userNumber);
    arraySomma += userNumber
}

console.log(arrayNew)
console.log(arraySomma)