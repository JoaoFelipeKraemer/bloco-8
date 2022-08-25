// Object Destructuring
// Você certamente já precisou extrair valores de um objeto em Javascript. No exemplo abaixo, como você faria para
//  imprimir o valor de cada propriedade do objeto product?

// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
//   };

//   Algo como console.log(product.name)? E repetir para cada propriedade. ES6 introduz um recurso q torna mais simples uma
//   tarefa como acessar os valores de um objeto,

//   E como exatamente funciona a desestruturação de objeto? Vamos voltar ao exemplo do objeto product. A sintaxe da
//   desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo,
//   entre chaves, e o objeto do lado direito:

// const { name } = product;
// console.log(name); // Smart TV Crystal UHD
// // Se quisermos pegar, além do nome, o vendedor do produto, podemos incluir a propriedade seller dentro das
// // chaves para acessar o seu valor correspondente:

// const { name, seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas

// Dessa forma, conseguimos extrair o valor da propriedade que precisamos acessar com muito menos código, atribuindo
// este valor à variáveis. Vale lembrar também que podemos adicionar quantas propriedades forem necessárias dentro das chaves,
//  basta seguirmos a sintaxe da desestruturação de objetos.


// Você deve estar se perguntando. "E se a chave do objeto contiver outro objeto como valor?" Veja o exemplo abaixo e entenda
// como podemos resolver este problema:

// definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };

//   Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito,
//   precisamos imprimir essas informações no console.log(), para isso, vamos utilizar a desestruturação de objetos:


// desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele
//  ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

//  Como foi mostrado, para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave
//   seguido por :, segue a sintaxe: homeWorld: { name: planetName }. Agora planetName é uma variável que recebe
//    o valor da propriedade name do objeto homeWorld.
//  Podemos também usar a desestruturação de objetos em conjunto com o spread operator, veja abaixo:

// const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
//   };
// //   Temos um objeto daysOfWeek que contém as chaves workDays e weekend. Precisamos agora extrair os valores dessas chaves e, 
// //   para isso, vamos utilizar a desestruturação de objetos:


// const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
//   };
  
//   const { workDays, weekend } = daysOfWeek;
//   console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//   console.log(weekend); // ['Saturday', 'Sunday']

// //   Feito a desestruturação, podemos utilizar o spread operator para juntar os valores do array workDays com os 
// //   do array weekend, colocando-os em um novo array chamado weekdays:

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];
  console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

//   Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la
//    como uma variável. Acompanhe o exemplo abaixo:

// const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
//   };

//   As propriedades do objeto student não são nada descritivas, não é mesmo? Se fossemos desestruturar esse objeto,
//   as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado...pensando nisso, 
//   podemos trocar o nome da variável ao fazermos a desestruturação:
// const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
//   };
  
//   const { a: name, b: classAssigned, c: subject } = student;
  
//   console.log(name); // Maria
//   console.log(classAssigned); // Turma B
//   console.log(subject); // Matemática
//   console.log(student)


  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  const name = student.a;
  console.log(name); // Maria
  console.log(student)

//   Por fim, uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar 
//   os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas