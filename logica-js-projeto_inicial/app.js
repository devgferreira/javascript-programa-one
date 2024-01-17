 alert('Boas vinda ao jogo do número secreto');

let numeroSecreto = 2;

let chute = prompt('Digite o número entre 1 e 10');

if(numeroSecreto == chute){
    console.log("Você acerto o número secreto: " + numeroSecreto);
}else{
    alert("Você errou :(")
}

