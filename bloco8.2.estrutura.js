// Estrutura das HOFs em Arrays


// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// });

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

// Suas partes:
// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF, pode ser, .find, .some, .every;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); - função a ser executada, 
// pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade.
// É isso mesmo! Quando você passa uma arrow function para uma HOF, o primeiro parâmetro que essa arrow
//  function recebe é o elemento do array. Em português, é como se:
//Significasse, Verifique se cada elemento do meu array é múltiplo de 2:

meuArray.forEach((elemento) => {
    if (elemento % 2 === 0) {
      console.log(`${elemento} é divísivel por 2!`);
    }
  });

//   Uma função como meuArray.find(elemento => elemento % 5 === 0), por outro lado, seria:
//   Encontre o primeiro elemento de meuArray que é múltiplo de cinco.

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

// A arrow function passada para o forEach possui element, index e array como parâmetros, onde:
// element - Valor do elemento do array;
// index - Índice em cada iteração ou posição do elemento no array, começando do 0;
// array - Array original que está sendo percorrido.
// Agora que já aprendeu sobre a estrutura, vamos nos aprofundar em cada uma das HOF.
