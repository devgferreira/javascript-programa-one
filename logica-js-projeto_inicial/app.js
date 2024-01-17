 alert('Boas vinda ao jogo do número secreto');

let numeroSecreto = 2;

let chute;

let tentativas = 1;


while (chute != numeroSecreto){
    chute = prompt('Digite o número entre 1 e 10');
    
    if(numeroSecreto == chute){
        alert("Isso ai! Você descobriu o número secreto " + numeroSecreto + ", e tentou " + tentativas)
    }else{
        
        if(chute > numeroSecreto){
            alert("O número secreto é menor que " + chute);
        }else{
           alert("O número secreto é maior que " + chute);
        }
        tentativas++;
    }

   
}

