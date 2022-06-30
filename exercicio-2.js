//Formatando os valores do array

let produtos = [100, 250, 1.99, 14.5, 15.58];

for(let i = 0; i < produtos.length; i++){
    produtos[i] = "R$ " + produtos[i].toFixed(2).replace('.', ',');
}

console.log(produtos);