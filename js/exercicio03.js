'use script';

// function escrevaL() {

//     document.write("<br>");
// }

// function escreva(frase) {

//     document.write(frase);
//     escrevaL();
// }

// function converter(dolar) {
//     return dolar * 5.16;
// }


// let dolarInformado = parseFloat(prompt("qual a quantidade de dolar ?"));
// let convertido = converter(dolarInformado);

// escreva("Você irá ter" + " R$ "+convertido+" reais.");
// escreva(`é equivalente a ${dolarInformado} dolares.`);

let dolar = 5.16;
let valorDolar = 1000;


function converter (valor){

   return valor * dolar;

}
console.log(converter(valorDolar));