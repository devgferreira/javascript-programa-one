/* alert('Boas vinda ao jogo do número secreto');

let numeroSecreto = 29;

let chute = prompt('Digite o número entre 1 e 30');

if(numeroSecreto == chute){
    console.log("Você acerto o número secreto!");
}
*/

alert('Boas vindas ao nosso site!');
let nome = "Lua";
let idade = prompt("Digite seu idade");
let numeroDeVendas = prompt("Digite suas venda");
let saldoDisponivel = prompt("Digite seu saldo");

if(idade == "" || nome == "" || numeroDeVendas == "" || saldoDisponivel == ""){
    alert("Erro! Preencha todos os campos. ")
}

if(idade >= 25){
    alert("Pode tirar carta")
}