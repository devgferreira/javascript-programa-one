 alert('Boas vinda ao jogo do número secreto');

let numeroSecreto = 2;

let chute;


while (chute != numeroSecreto){
    chute = prompt('Digite o número entre 1 e 10');
    if(numeroSecreto == chute){
        console.log("Você acerto o número secreto: " + numeroSecreto);
    }else{
        if(chute > numeroSecreto){
            alert("O número secreto é menor que " + chute)
        }else{
           alert("O número secreto é maior que " + chute) 
        }
    }
    
}

