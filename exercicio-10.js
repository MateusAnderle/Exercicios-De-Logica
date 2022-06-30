let produtos = [
    { nome: "Caneta", preco: 1.2, qtd: 20 },
    { nome: "Lápis", preco: 0.2, qtd: 55 },
    { nome: "Borracha", preco: 2.0, qtd: 20 },
    { nome: "Corretivo", preco: 5.1, qtd: 15 },
    { nome: "Mochila", preco: 120.5, qtd: 10 },
];
    
function mostrarProdutos(prod) {
    let res = "";
    for (let i = 0; i < prod.length; i++) {
      res += prod[i].nome + ' ' + prod[i].preco + ' ' + prod[i].qtd + ' ';
    }
    console.log(res);
}
  
mostrarProdutos(produtos);