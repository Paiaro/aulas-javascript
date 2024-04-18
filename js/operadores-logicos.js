'use strict';

// Requisitos para aprovação 

const mediaMinima = 7;
const faltasMaxima = 10;

// Aluno de exemplo

let aluno = "Dayane";
let mediaFinal = 6;
let faltas = 15;
let resultado;
// operador && "and" ("E")
if (mediaFinal >= mediaMinima && faltas <= faltasMaxima ){
resultado = "aprovado";
}
else {
    resultado = "reprovado";
}
console.log(resultado);