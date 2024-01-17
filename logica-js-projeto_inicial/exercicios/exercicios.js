// pedir informações para o usuario!
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