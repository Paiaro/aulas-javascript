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

/*modificando o DOM : 

Podemos alterar conteúdo, tags, estilos, criar elementos, remover elementos etc*/

//alteração de conteudo textual
legenda.textContent = "Imagem modelo de objetos do documento";

//ateração de conteúdo com suporte à tags
sobrefront.innerHTML = "<i>Front-End</i>";

//alteração de estilos inline (CSS in JS)

titulo.style.color = "red";
titulo.style.textAlign = "center";

subtitulo1.style.color = "red";

//aplicação de classes CSS via JavaScript

titulo.classList.add("destaque");

const listaDeEditores = [{
    nome: "Visual Studio Code", finalidade: "desenvolvimento web em geral"
},
{
    nome: "android studio", finalidade: "desenvolvimento de aplicações android"
},
{
    nome: "xcode", finalidade: "desenvolvimento de aplicaçoes IOS"
}];

// Acessando/selecionando a lista que será usada no html

const lista = document.querySelector(".lista");

console.log(lista);

/* Percorrer (loop) o array de  listaDeEditores e criar os itens <li> com o conteúdo do array e adiciona-los a lista html. */

//for (variavel/constante de acesso of array com dados que queremos acessar){}
for (const editor of listaDeEditores) {

    // Etapa 1 : criar elemento <li>
    const item = document.createElement("li");

    // Etapa 2 :  adicionar conteudo ao elemento
    item.innerHTML = `<big><b>${editor.nome}</b></big>: ${editor.finalidade}`;

    // Etapa 3 : adicionar o elemento a lista <ol>
    lista.appendChild(item);


}
