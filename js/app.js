/*

function alterarStatus1() {

    let button1 = document.getElementById('button1');

    if (button1.innerHTML == 'Alugar') {
        button1.innerHTML = 'Devolver';
        button1.style.backgroundColor = '#01080E'
    } else {
        if (button1.innerHTML == 'Devolver') {
            button1.innerHTML = 'Alugar';
            button1.style.backgroundColor = '#1875E8'
        }
    }
}

function alterarStatus2() {
    let button2 = document.getElementById('button2');

    if (button2.innerHTML == 'Alugar') {
        button2.innerHTML = 'Devolver';
        button2.style.backgroundColor = '#01080E'
    } else {
        if (button2.innerHTML == 'Devolver') {
            button2.innerHTML = 'Alugar';
            button2.style.backgroundColor = '#1875E8'
        }
    }
}

function alterarStatus3() {
    let button3 = document.getElementById('button3');

    if (button3.innerHTML == 'Alugar') {
        button3.innerHTML = 'Devolver';
        button3.style.backgroundColor = '#01080E';

    } else {
        if (button3.innerHTML == 'Devolver') {
            button3.innerHTML = 'Alugar';
            button3.style.backgroundColor = '#1875E8';
        }
    }
}
*/


//   metodo do instrutor


function alterarStatus(id) {

    // todas as variaveis que vou manipular >>   
    let gameClicado = document.getElementById(`game-${id}`); // preciso concatenar com valor do paramentro da funcção pego no html dentro do parentese 
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    // não vou precisaer da variavel do nome do jogo>>     let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    // não preciso desse alerta >>    alert(nomeJogo.textContent); // alerta com nome somente do valor dentro da tag poderia ser .innerHTML também.


    // verificando com uma consição booleana verdadeira ou false (true) end (false) if e else.>>   
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        //se a consição do if for verdadeira vai entrar aqui e fazer o que tem aqui dentro >>
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        //se a consição do if for falsa vai entrar aqui e fazer o que tem aqui dentro >>

        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}