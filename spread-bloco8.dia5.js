// O que vamos aprender?
// Hoje você vai aprender sete features do ES6 que são muito úteis na hora de desenvolver uma aplicação:
// spread operator;
// parâmetro rest;
// object destructuring;
// array destructuring;
// default destructuring;
// abbreviation object literal;
// default params.

// Spread Operator
// Como você faria para adicionar itens a um array? 
// const numbers = [1, 2, 3];
// numbers.push(4);

// console.log(numbers); // [1, 2, 3, 4]

// Essa solução é válida, e o seu raciocínio está correto! Mas... Onde foi parar o array original numbers?
// OBserve q quando usamos push para addd algo a o array ele sera sobrescrito. Neste caso sobrescrever o array numbers
// n é um prblema, no entanto, em aplicações maiores q vc precisa atualizar alguma informção de um array ou Object,
// vc ṕde querer manter ass informações originais e apenas criar uma copia do array original com o q precisa ser 
// alterado. em cenarios como esse deixamos o push de lado e usamos um recurso incrivel para adicionar valores a
// objetos iteraveis: o operador spread. vc se lembra doo Object.assign ? Pois bem, ao utilizar o operador spread,
// vc pode obter o mesmo resultado do Object.assign, porém de uma forma mais simples pois é posivel utilizar uma
// sintaxe mais curta. e não para por ai! vc vera que o spread pode ser utilizado para combinar objts e arrays, para
// copiar valores de objetos iteraveis e tb em funções que recebem multiplos argumentos.



// O operador spread é um recurso do ES6 que nos permite espalhar os valores de um objeto iterável, 
// como um array, em um novo objeto. Dessa forma, apenas copiamos ass informações do array original e colamos em outro lugar.
//  Acompanhe o exemplo numérico abaixo para fixar melhor a ideia do spread:
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros. No próximo exemplo, temos uma função que
//  calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa, e retorna o 
//  resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores 
//  no argumento da função que calcula o IMC:

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como 
// as funções Math.max e Math.min. Vamos ver um exemplo?
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

//tb se pode fazer o mesmo com objetos
const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */


  // Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'laranja', 'caju'];

const fruitSalad = (fruit, additional) => {
  const salada = [...fruit, ...additional];
  return salada
};

console.log(fruitSalad(specialFruit, additionalItens));
