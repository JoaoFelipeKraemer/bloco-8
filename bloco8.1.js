// Uma linguaguem é dita ter First-Class Functions quando trata suas funções como first class citizens 
// , ou seja, elas suportam as mesmas operações que estão disponíveis para os outros tipos.isso significa 
// que nossas funções podem ser atribuídas à variáveis, passadas como argumento e/ou retornadas por outras funções.



// Atribuir funções à variáveis:
function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable);
  //  [Function: sum]

//   const sum = (number1, number2) => {
//     return number1 + number2;
//   };

//   Quando utilizamos arrow functions, estamos justamente utilizando da capacidade do javascript de conseguir armazenar a função
//   dentro de uma variável. Isso é algo maravilhoso.
// Passar funções como argumento para outras funções:
const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

//   Retornar uma função de outra função:

const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));

//   já especificamos o que são funções de primeira classe, vamos aprender sobre as Funções de Ordem Superior,
//   conhecidas por Higher Order Functions ou simplesmente HOFs.
//   As HOFs são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las.
//   O mais incrível é que você já aplicou este conceito na prática. Veja este exemplo:

// const button = document.querySelector('#signup-button');

// const registerUser = () => {
//   console.log('Registrado com sucesso!');
// };

// button.addEventListener('click', registerUser);

// Construímos uma função que simula o registro de uma nova pessoa e passamos como argumento de uma segunda função.
// Logo, addEventListener é uma HOF.
// Lembre-se: First-Class Functions é o nome do conceito que define a forma que a linguagem (no nosso caso JavaScript)
// trata suas funções, permitindo que sejam suportadas em operações que são usadas em outros tipos (atribuição, retorno,
// parâmetro), e HOF é uma função que atende ao critério de receber como parâmetro e/ou retornar outra função.

// Estruturando HOFS

// 1é extremamente importante ter em mente que as HOFs nos permitem compactar ações e não somente repassar valores.
// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);

//  2 Construímos essa função para implementar um laço de repetição entre 0 e um número especificado via parâmetro (number) 
//   e para mostrar no console o valor da variável count de 0 a N (number). 
// O console.log é uma função própria do JavaScript, mas veja que fica mais simples caso você precise substituir 
// esta ação para console.table ou console.group.
// Vamos aumentar um pouco o nível de complexidade e visualizar como podemos ir construindo funções mais especializadas
//  e bem definidas. Veja este exemplo:

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(3, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   });

//  3 Pegamos a nossa implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função repeat, sendo:
// 1 - Um número até que ponto gostaríamos de testar, neste caso 3;
// 2 - Nossa ação que será executada quando chamada action(count) na nossa função repeat, neste caso uma função
//  para testar nossos números.
// Veja que nosso segundo parâmetro é uma função que recebe o count como argumento, proveniente da execução do nosso
//  action(count) dentro da função repeat. Deste modo, caso o count passe pela condição estabelecida para ser um número par, 
//  será executada a mensagem com os números que atendem ao critério.

// Pense agora que gostaríamos de testar quais números são ímpares. Veja como fica fácil ajustar a implementação:

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;

// Observe que apenas transportamos e ajustamos a lógica para identificar os números pares e ímpares em duas novas funções
// chamadas isEven e isOdd. Após isso, só alteramos o segundo parâmetro ao chamar a função repeat.
// A função recebida como argumento pela HOF, também é conhecida por callback. No exemplo, repeat é uma HOF que recebe 
// isEven ou isOdd como callback. Podemos encontrar mais sobre este assunto nos Recursos adicionais, no entanto não se
// preocupe com este conceito no momento, abordaremos isso nos conteúdos adiante.
// Olhe o exemplo a seguir:
const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());

//   Veja que ao executar esse código, não recebemos um número aleatório. Isso aconteceu porque na quinta linha do script nós 
//   imprimimos apenas a escrita da função, como não realizamos sua execução, ela não seguiu os procedimentos para retornar 
//   um número aleatório. Para executarmos a função, teríamos que inserir () na frente do numberGenerator. (não deu para inserirr ()
