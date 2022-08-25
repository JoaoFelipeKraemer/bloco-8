// //imprimir cada elemento do array em linha
// const array = ['a', 'b', 'c',]
// console.log(...array)


// ///una os arrays
// //usando for

// const horror = ['it', 'the shining', 'burry my heart at the wounded knee'];
// const scifi = ['I,robot', 'caves of steel', 'got']

// // usando for
// // let bonslivros = [];

// // for (let i = 0; i < horror.length; i += 1) {
// //     bonslivros.push(horror[i]);
// // }

// // for (let i = 0; i < scifi.length; i += 1) {
// //     bonslivros.push(scifi[i]);
// // }

// //usando foreach
// // horror.forEach( (horror) => { ///sem retorno pq forEach n retorna nada
// //     bonslivros.push(horror)
// // })

// // scifi.forEach((scifi) =>  bonslivros.push(scifi))
// // console.log(bonslivros)



// //spread operator

// const bonslivros = [...horror, ...scifi];

// console.log(bonslivros)

// spread

// const point = [1.0, 2.2, -6.6];
// const otherPoint = [0.1, 3.5, -99.6]

// const printPointsCordinates = (x, y, z) => `point cordinates are x = ${x}, y = ${y} and z = ${z} `;

// console.log(printPointsCordinates(...point));

// console.log(printPointsCordinates(...otherPoint));

//rest a dirença: 

// [1, 2]
// [1, 2, 3]
// [1, 2, 3, 4]

// const sumAll = (values) => {
//     let sum = 0;
//     values.forEach((value) => {
//         sum += value;
//     })
//     return sum
// }
///com reduce

const sumAll = (...values) => {
    return values.reduce((acc, curr) => {
        return acc + curr;
    })
}



console.log(sumAll(1, 2))
console.log(sumAll(1, 2, 3))

//sem rest
// const formaDate = (year, month, day, hour, minute, second) => {
//     return ` ${day}/${month}/${year} `
// }


// console.log(formaDate('1991', '7', '31', '22', '46', '12'))
///com spread
const dateInfo = ['1991', '7', '31', '22', '46', '12'];

// console.log(formaDate(...dateInfo));

//com rest
// const formaDate = (year, month, day, ...rest) => {
//     return ` ${day}/${month}/${year} - ${rest[0]}:${rest[1]}:${rest[2]} `
// }
// console.log(formaDate(...dateInfo));


//com rest e join

// const formaDate = (year, month, day, ...rest) => {
//     return ` ${day}/${month}/${year} - ${rest.join(':')} `
// }
// console.log(formaDate(...dateInfo));

// refatorando

const formaDate = (year, month, day, ...rest) => ` ${day}/${month}/${year} - ${rest.join(':')} `
console.log(formaDate(...dateInfo));



///default params

// faça uma função que receba 1 numero  e retorne esse numero multiplicado por um
//fator se nenhum fator for passado a função deve retornar numero x 1


const multiply = (number, factor = 1) => { // adiciona o 1
return number * factor;

}

console.log(multiply(9))
console.log(multiply(9,2))