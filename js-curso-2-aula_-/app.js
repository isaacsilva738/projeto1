
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'JOGO DO NUMERO SECRETO';

//let paragrafo = document.querySelector('P');
 //paragrafo.innerHTML = 'ESCOLHA UM NUMERO DE 1 A 10';
 
 let listaDeNumerosSorteados = [];
 let numeroLimite = 5;
 let numeroSecreto =gerarNumeroAleatorio(); 
 let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}
function exibirMensagemInicial() {
exibirTextoNaTela('h1' , 'jogo do numero secreto');
exibirTextoNaTela('p' , 'escola um numero de 1 a 5');

}


exibirMensagemInicial();

 function verificarChute() {
    let chute = document.querySelector('input').value;
      
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas =`Voce descrobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto e menor');
        }else{
            exibirTextoNaTela('p', 'o numero secreto e maior');

        }
    tentativas++;
         limparCampo();
    
    }



 }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
     }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
    
    function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
    }