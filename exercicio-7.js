//Exibindo dia da semana

let dias = new Array(
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  );
  
let hoje = new Date();
  
let diaSemana = hoje.getDay();
  
console.log(`Seja muito bem vindo! Hoje é ${dias[diaSemana]}`);