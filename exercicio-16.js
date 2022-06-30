let precosLivros = {
    historia: 24.00,
    geografia: 36.00,
    matematica: 50.00,
    fisica: 12.00,
    quimica: 44.00
};
for(i in precosLivros){ //Retorna o valor do índice.
    console.log(`Livro de ${i} - Valor do livro: R$${precosLivros[i]},00`);
};



let pessoa = [
    { nome: 'Mateus', idade: 27, sexo: 'Masculino' },
    { nome: 'Maria', idade: 35, sexo: 'Feminino' },
    { nome: 'Pedro', idade: 19, sexo: 'Masculino' },
    { nome: 'Eduarda', idade: 22, sexo: 'Feminino' }
];

let res = "";
for (let n in pessoa) {
     res += pessoa[n].nome + ' ' + pessoa[n].idade + ' ' + pessoa[n].sexo + ' ';
} 
console.log(res);