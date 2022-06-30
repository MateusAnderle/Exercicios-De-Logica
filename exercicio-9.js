let chefao = 250;
let atirador = 3;

function play() {
  let res = chefao / atirador;
  return (res = parseInt(res));
}
console.log(`São necessários ${play()} tiros do atirador para acabar com o Chefão`);