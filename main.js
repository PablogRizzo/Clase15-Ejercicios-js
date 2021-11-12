const log = console.log;
// 1-
//  arr = [1,3,4,2,6,7,9,1, 8]
// Crear una función que indique el total de elementos impares de un array
//  output => 5
// ===========================================================

let arr = [1,3,4,2,6,7,9,1, 8];

function impares(array)
{
    let i = 0;
    let len = arr.length;
    let cont = 0;
    for(;i<len;i++){
        if(arr[i]%2!=0){
            cont++;
        }
    }
    log(cont);
}

impares(arr);

// 2-
//   str = "hola mundo desde javascript"
//   pasar un string en array, indicar los espacios en blanco por "-"
//   output => ["hola", "mundo", "-", "desde", "-", "javascript"]
// ===============

let str = "hola mundo desde javascript";
str = str.replace(/\s/g, '-').split(" ");
log(str);


// 3-
// Crear una variable que contenga el siguiente array :
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Definir una variable filtered que muestre los valores de los los numeros que son pares utilizando el método .filter()

let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = arrr.filter(value => value%2==0);
log(pares);


// 4- Crear una variable que filtre los animales que no sean 'cat' usar filter
// const pets = ['cat', 'dog', 'elephant','hawk','snake','cat']

const pets = ['cat', 'dog', 'elephant','hawk','snake','cat'];
let noCats = pets.filter(value => value!=='cat');
log(noCats);


// 5- Crear una variable que muestre solo los nombres de los productos del siguiente array
// hacerlo con .map

const productos = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
];

let nombres = productos.map(i => i.nombre);
log(nombres);

// 6-  Usando el reduce retornar un solo array. pista: .concat
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let r = data.reduce((p,a)=>p.concat(a));
log(r);