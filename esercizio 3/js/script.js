const numbers = [1, 39 , 68 , 4 , 25 , 1 , 3 , 90 , 9 , 11 , 32 , 0 , 21 , 5 ,7 ,7 ,8 ,10 ];

console.log(numbers);
let sommaOdd = 0
for (i = 0; i < numbers.length; i++){
    
    if (i % 2 !== 0){
        const oddNumber= numbers[i];
        sommaOdd += oddNumber ;
    };
}
alert(`la somma dei numeri in posizione dispari è ${sommaOdd}`)