let chosenNumber;
chosenNumber = parseInt(prompt('inserisci un numero'));
if (chosenNumber % 2 == 0) {
    alert(  `${chosenNumber} è pari` );
}else {
    chosenNumber++
    alert(`${chosenNumber} è il successivo a quello scelto`);
}