'use strict';

//Seleção dos elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");

// Criar um ouvinte de eventos (Event Listener)
//O primeiro parâmetro do addEventoListener é o tipo de evento que queremos "ouvir/monitorar". O segundo parametro é uma função (conhecida como callback) responsavel por executar ações no momento em que o evento acontecer.

exemplo01.addEventListener("click", function () {
    mensagem.textContent = "para de clicar 🪓 !"
});

