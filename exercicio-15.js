//Exercícios com laços FOR

let precos = [102, 24, 35, 12, 22]
let total = 0;
let total2 = 0;
let totalSub = precos[0];

for(let i = 0; i < precos.length; i++){
    total += precos[i];
}

for(let n = 1; n < precos.length; n++){
    totalSub -= precos[n];
}

for(a in precos) {
    total2 += precos[a];
}

console.log(`Total: ${total}, Total 2: ${total2}, Total subtraindo desde o primeiro: ${totalSub}`);