//Somando valores dentro de um array.

let compras = new Array(152,658,316,268,284);
let total = 0;

for(let i = 0; i < compras.length; i++){
    total += compras[i];
}

console.log(total);