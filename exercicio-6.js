//Mostrando produtos de um array

let produtos = new Array(
    "Macarrão",
    "Peito de frango",
    "Mussarela",
    "Linguiça",
    "Leite",
  );
    
  function mostrarProdutos(prod) {
    let produto = "";
    for (let i = 0; i < prod.length; i++) {
        produto = produto + "Produto " + (i + 1) + ": " + `${prod[i]}, `;
    }
    console.log(produto);
  }
  
mostrarProdutos(produtos);