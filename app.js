let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
console.log(numeroSecreto);

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto){
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
    } else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else{
        exibirTextoNaTela('p', 'O número secreto é maior');
    }

    tentativa++;
}

function gerarNumeroAleatorio (){
    return parseInt(Math.random() * 10 + 1);
}