//Calculando média, levando em conta que zerando uma das provas é reprovado na hora.

let n1 = 0;
let n2 = 10;
let saida = '';

let media = (n1 + n2) / 2;

if (n1 === 0 || n2 === 0 || media < 5) {
  saida = "Você foi reprovado";
} else {
  saida = "Aprovado";
}

console.log(saida);