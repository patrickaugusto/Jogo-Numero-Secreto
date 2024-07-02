let listasDeNumerosSorteados= [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 0;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');    
}

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!')
        tentativa += 1;

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto){
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}`)
        tentativa += 1;
    } else {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`)
        tentativa += 1;
    }

    document.getElementById('tentativa').innerHTML = tentativa
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * 100 + 1);
    let qtdElementosLista = listasDeNumerosSorteados.length;
    if (qtdElementosLista == 100){
        listasDeNumerosSorteados = [];
    }
    if (listasDeNumerosSorteados.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    }
    listasDeNumerosSorteados.push(numeroAleatorio);
    return numeroAleatorio;
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();
