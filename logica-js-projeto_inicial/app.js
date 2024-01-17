 alert('Boas vinda ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 100 +1);
let chute;

let tentativas = 1;


while (chute != numeroSecreto){
    chute = prompt('Digite o número entre 1 e 100');
    
    if(numeroSecreto == chute){
        break;
    }else{
        
        if(chute > numeroSecreto){
            alert("O número secreto é menor que " + chute);
        }else{
           alert("O número secreto é maior que " + chute);
        }
        tentativas++;
    }

   
}


alert("Isso ai! Você descobriu o número secreto " + numeroSecreto + ", e tentou " + tentativas + " vez");
