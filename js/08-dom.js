'use strict';

/* Funções/métodos comuns para seleção de elementos no DOM

-getElementById()
Seleciona um elemento através do atributo ID

- querySelector()
Seleciona UM ELEMENTO através de seletor baseado na lógica CSS

- querySelectorAll()
 Seleciona TODOS ou Vários elementos através do seletor baseado na lógica CSS
*/

//exemplo 1: getyElementById()


const legenda = document.getElementById("legenda");
console.log(legenda);

//exemplo 2: querySelector()

const titulo = document.querySelector("h1");

console.log(titulo);

const sobrefront = document.querySelector("#sobre")

console.log(sobrefront);


// exercicio 1

/* 1) Faça o acesso/seleção do h2 de back-end e mostre no console

2) faça o acesso/seleção apenas do h2 existente dentro da div com a classe 'editores' e mostre no console*/


const subtitulo1 = document.querySelector(".back-end")

console.log(subtitulo1);

const subtitulo2 = document.querySelector(".editores h2")

console.log(subtitulo2);

//exemplo 3 queryElementAll () funciona parecido com um array

const subtitulos = document.querySelectorAll("h2")

console.log(subtitulos);
console.log(subtitulos[1]);


const variosElementos = document.querySelectorAll("p,a,p b, #teste, .xyz, ol")

console.log(variosElementos);

/* */
