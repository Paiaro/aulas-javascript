'use strict';

//Seleção dos elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");

//Criando um objeto de áudio referenciando o arquivo

const efeitoSom = new Audio();
efeitoSom.src = "wow.wav";

//Criando um objeto de imagem referenciando o arquivo

const imagem = new Image();
imagem.src = "meme.gif";

//video
const video = document.querySelector("video");


// Criar um ouvinte de eventos (Event Listener)
//O primeiro parâmetro do addEventoListener é o tipo de evento que queremos "ouvir/monitorar". O segundo parametro é uma função (conhecida como callback) responsavel por executar ações no momento em que o evento acontecer.

exemplo01.addEventListener("click", function () {
    mensagem.textContent = "para de clicar 🪓 !";

    //ativando uma classe para o mensagem
    mensagem.classList.add("destaque");

    efeitoSom.play();

    mensagem.insertAdjacentElement("afterend", imagem);

//objeto de video aparecendo 
video.removeAttribute("hidden");
video.play();


});

/* exemplo modo noturno */
const divConteiner = document.querySelector(".container");
const botao = document.querySelector("#noturno");

//usamos toggle para alterar entre os estados da classe (aplicada e nao aplicada)
botao.addEventListener("click",function(){

    pagina.classList.toggle("noturno");
    divConteiner.classList.toggle("noturno");
    const textoBotao = botao.textContent;
    botao.textContent = textoBotao === "desativar" ? "ativar" : "desativar";
    pagina.style.transition = "0.5s";
   
});

/* desafio

1) Aplicar um efeito de mudança de cores suave
2) Fazer o botão mudar de texto, ou seja, iniciar com o texto "ativar" e trocar para texto "desativar" conforme o que estiver acontecendo.*/


