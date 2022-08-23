// outras duas Higher Order Functions: Array.map e o Array.filter

// Você será capaz de:
// Utilizar a função Array.map para manipular e construir arrays;
// Utilizar a função Array.filter para filtrar um array;
// Aprender a usar de forma conjunta as Higher Order Functions.

// filter = sempre retorna array

const arr = ['Ana', 'Pedro', 'Giovana']

arr.filter((element, index, array) => console.log(element))

const filtered = arr.filter((element) => element === 'Ana');
console.log(filtered)


const notaEstudantes = [
    {
        nome: 'Joicy',
        nota: 100
    },
    {
        nome:'Joel',
        nota: 80
    },
    {
        nome:'Ana',
        nota: 90
    },
    {
        nome:'Roma',
        nota: 60
    },
    {
        nome:'Ronald',
        nota: 50
    }
];

// notaEstudantes.filter((element) => console.log(element))
const estudanteAprovado = notaEstudantes.filter((element) => element.nota >= 80)
console.log(estudanteAprovado)


const estudanteReprovado = notaEstudantes.filter((element) => !(element.nota >= 80))
console.log(estudanteReprovado)
// const estudanteReprovado = notaEstudantes.filter((element) => element.nota < 80)
// console.log(estudanteReprovado)

//exemplo abaixo apenas substituimos o find por filter
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]
//o retorno do codigo acima é um array
//verifique que abaixo receberemos um array das pessoas q n tem idade para dirigir

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
  
  const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
  );
  
  console.log(verifyAgeDrive(objPeople));
  // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
  
//   Outra forma de se usar o filter é retornar um array sem o elemento desejado.
//    É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
// Observe que o filter foi usado dentro de uma função que recebe dois parâmetros,
//  o array de valores e uma string, o que será removido. A condição de dentro
//   do filter é para retornar sempre que o elemento for diferente do name passado.
//    Se tiver ficado confuso, rode esse código por conta própria e altere um pouco o seu funcionamento!
//     Isso ajudará muito.


