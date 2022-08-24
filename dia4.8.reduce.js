// Array.reduce
// Essa função é, talvez, uma das mais poderosas funções para MANIPULAÇÃO E CRIAÇÃO de arrays. 
// Ela deixará seu código mais legível, conciso e expressivo.

// Array.reduce
// O reduce é diferente das outras HOFs: ele recebe dois parâmetros sendo o primeiro uma callback e o 
//segundo um valor inicial, que é opcional. Como o próprio nome diz o reduce busca reduzir um array. 
//Isto é, iterando em elementos de um array, ao final ele gera um valor único de qualquer tipo, como, 
//por exemplo, a soma de todos os elementos de tal array. Como principais vantagens do uso do método reduce podemos destacar:
// escrita de código mais limpo;
// maior facilidade ao implementar a lógica com a qual se quer trabalhar;
// melhor manutenção de código. Veja abaixo a estrutura completa do reduce:


// reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue )

// A callback, que é o primeiro parâmetro do reduce, também pode receber até quatro parâmetros. Desses quatro parâmetros 
// apenas dois deles devem existir obrigatoriamente, sendo eles o acc(ACCUMULATOR) e o curr(CURRENTVALUE)
//sendo assim acc(parametro 1 da callback) e curr(parametro 2 da callback) sao obrigatorios  e devem sempre constar nessa ordem

// array.reduce((acc, curr) => {
//     // escopo de execução da função
// }, valorInicial)


// o que faz acc? A função do acumulador é guardar o retorno da callback, a cada iteração,
// tendo como ponto de partida o valorInicial quando estabelecido.
// Quando não estabelecido, automaticamente o acc assume o valor do primeiro elemento do array que está iterando.

//Confira o código abaixo onde vamos calcular a soma total dos elementos de um array:

// const numbers = [1, 32, 44, 2, 3];
// const iteracoesDoReduce = numbers.reduce((acc, curr) => {
//   console.log(`valor atual é ${curr}`);
//   // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array,
//   // e o valor de início de `curr` é o valor no index 1 do array.
//       // Iteração 1: valor do acc é 1 e o de curr é 32;
//  // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
//      // Iteração 2: valor do acc é 33 e o de curr é 44;
// // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do 
// //segundo index e `acc` segue armazenando os retornos.
//     // Iteração 3: valor do acc é 77 e o de curr é 2;
//     // Iteração 4: valor do acc é 79 e o de curr é 3;
//     // Valor final de `acc`é 82 e `curr` para no 3.
  
  
//   return acc +  curr // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
  
// });

// console.log(`O resultado final é ${iteracoesDoReduce}`);
  // por fim, esse console.log imprime o retorno final da nossa função, 

// imagine novamente q vc queira somar  os valores do array. mas agora com valorInicial para o acc estipulado, antes de conhecer
// o reduce vc faria algo do tipo:

// const numbers = [1, 32, 44, 2, 3];
// let sumNumbers = 30;
// // A variável `sumNumbers` tem um valor inicial de 30 e vai acumulando, a cada iteração do for, o resultado da operação
// // feita em seu escopo!

// for (let index = 0; index < numbers.length; index += 1) {
//   sumNumbers += numbers[index];
// }
// console.log(sumNumbers); // 112

// agora com reduce:
// const numbers = [1, 32, 44, 2, 3];

// const totalSum = numbers.reduce((acc, curr) => {
//   console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
//    // Iteração 1: valor do acc é 30 e o de curr é 1
//    // Iteração 2:valor do acc é 31 e o de curr é 32
//    // Iteração 3: valor do acc é 63 e o de curr é 44
//    // Iteração 4: valor do acc é 107 e o de curr é 2
//    // Iteração 5: valor do acc é 107 e o de curr é 3
//    // Valor final de `acc`é 112 e `curr` para no 3


//   return acc + curr;
// }, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

// console.log(`valor final do acc é ${totalSum}`);
  // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5
  // iterações, tendo iniciado com valor 30.


//   Pode parecer estranho definir um valor fixo para o acumulador, mas isso porque estamos trabalhando com números. O reduce é
//    uma ferramenta poderosa e em um código mais complexo ele poderia receber um valor dinâmico, através de uma variável 
//    ou até mesmo qualquer valor que não seja um número.

// qual a vantagem de usar reduce na pratica? vamos dissecar a diferença entre o uso do for e do reduce.
// método for :
// -necessidade de criar uma variável para acumular o resultado de cada iteração do for a soma de cada resultado
// let sumNumbers
// -necessidade de setar um valor inicial para variável -sumNumbers = 30

// ja no metodo .reduce:
// -a função callback passada por parâmetro recebe 2 parametros o acc e o elemento do array 
// de cada iteração, curr
// -como a função é uma arrow function que possui apenas 1 linha o return de cada iteração sera: acc+crr
//- o retorno é salvo no primeiro parametro(acc). É como se vc estivesse fazendo igual à primeira
//função, sumNumbers = sumNumbers + numbera[index], mas nesse caso seria acc= acc+cur.
//ORGANIZANDO PARA SIMPLIFICAR
// -beja que ao inves de passar a logica direto dentro da callback do reduce vc poderia criar uma
// função externa e chama-la como sendo parametro  callback
// const numbers = [1, 32, 44, 2, 3];

// const sumNumbers =  (acc, curr) => acc + curr;

// const totalSum = numbers.reduce(sumNumbers, 30);

// console.log(totalSum); //112


// OUTROS EXEMPLOS 
// neste exemplo, serão comparados valores para buscar o maior valor em um array .
// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 86);
// console.log(bigger); // 85
// A função passada agora pode possuir dois tipos de retorno:
// O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; ou
// O valor do elemento do array, number, que indica que possui um valor maior que bigger.

// Modifique o segundo parâmetro passado, o 0, no reduce para 100 e execute o programa. O retorno agora é 100, já que nenhum número
//  de dentro do array é maior que o valor inicial passado. Então veja: a cada iteração, o reduce mantém o valor do acumulador
//   igual ou o atualiza de acordo com a comparação que é feita. Ao final, você tem o maior valor do array. Adicione um 
//   console.log à função do reduce para ver isso acontecendo em detalhes, se quiser!


// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// Tente criar uma usando reduce e filter, e outra apenas usando reduce.

// Solução usando filter e reduce:
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (accumulator, number) => accumulator + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152

// Solução usando reduce:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152








