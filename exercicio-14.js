//Aplicação que pega a pontuação de dois jogadores e mostra o ganhador

let jogador1 = [81, 35, 67, 48];
let jogador2 = [74, 95, 63, 55];
let res = document.getElementById('res');

function mostrar(){
    let ptJ1 = 0;
    let ptJ2 = 0;

    for(let i = 0; i < jogador1.length; i++){
        ptJ1 += jogador1[i];
    }
    
    for(let n = 0; n < jogador2.length; n++){
        ptJ2 += jogador2[n];
    }

    if(ptJ1 > ptJ2) {
        res.innerHTML = `<p>Jogador 1 foi o vencedor com ${ptJ1} pontos</p>`;
    } else {
        res.innerHTML = `<p>Jogador 2 foi o vencedor com ${ptJ2} pontos</p>`;
    }
}