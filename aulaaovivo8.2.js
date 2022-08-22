const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// imprimir todos elementos do array usando for
// for (let index = 0; index < letters.length; index += 1) {
//     console.log(letters[index]);
// };

//usando forEach()
//arr.forEach(callback(currentValue[,index [,array]]))
// letters.forEach( (letter, index, array) => {
//     // console.log(`Valor corrente: ${letter}-> index: ${index} -> ${array}`);
//     console.log(letter)
// } );

//refatorando
letters.forEach((letter) => console.log(letter));
