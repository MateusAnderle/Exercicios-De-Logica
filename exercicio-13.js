//Sistema de notas escolares: mostra as notas bimestrais de cada aluno, bem como a média anual e se o aluno foi aprovado.
let quintaSerie = [
    { nome: 'Mateus', nota: [8, 4, 9, 7] },
    { nome: 'Maria', nota: [7, 8, 6, 10] },
    { nome: 'João', nota: [8, 9, 10, 8] },
    { nome: 'Felipe', nota: [5, 7, 3, 8]}
];

function mostrar(){
    let notasDeCadaAluno = [];
    let res = document.getElementById('res');

    for(let i = 0; i < quintaSerie.length; i++){
        notasDeCadaAluno[i] = 'Notas de ' + quintaSerie[i].nome + ': ' + quintaSerie[i].nota;
    }

    for(let a = 0; a < notasDeCadaAluno.length; a++){
        res.innerHTML += `<p> ${notasDeCadaAluno[a]}</p>`
    }

    for(let b = 0; b < quintaSerie.length; b++){
        let nota = quintaSerie[b].nota;
        let soma = 0;
            for (var j = 0; j < nota.length; j++) {
                soma += nota[j];
            }
        let mediaAnual = soma / nota.length;
        if(mediaAnual < 7){
            res.innerHTML += `<p>O(a) aluno(a): ${quintaSerie[b].nome} teve uma média anual de ${mediaAnual} e reprovou de ano</p>`;
        } else {
            res.innerHTML += `<p>O(a) aluno(a): ${quintaSerie[b].nome} teve uma média anual de ${mediaAnual} e passou de ano!!</p>`;
        }
    } 
}