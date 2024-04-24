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





// versão corrigida
let dolar = 5.16;
let valorDolar = 1000;


function converter(valor) {

    return valor * dolar;

}

function formatarMoeda(valor, moedas) {
    const opcoes = {
        style: "currency",
        currency: moedas
    };
    return new Intl.NumberFormat("pt-br", opcoes).format(valor);

}
// versão sem fomatação
console.log(converter(valorDolar));
//versão 1 (função com parametro para outra função) com formatação
console.log(formatarMoeda(converter(valorDolar), "BRL"));

// segunda versão corrigida (guardamos o resultado da conversão; depois passamos o resultado para a formatação)

let resultadoReais = converter(valorDolar);

console.log(formatarMoeda(valorDolar,"USD"));