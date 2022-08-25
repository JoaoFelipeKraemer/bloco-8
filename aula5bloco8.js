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

const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6]

const printPointsCordinates = (x, y, z) => `point cordinates are x = ${x}, y = ${y} and z = ${z} `;

console.log(printPointsCordinates(...point));

console.log(printPointsCordinates(...otherPoint));


