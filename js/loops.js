'use strict';


/* Loops tradicionais mais usados:
- while (enquanto)
- for (para)


Normalmente, os loops são controlandos através de uma variavél contadora ou de alguma condição lógica para que p loop seja interrompido.*/

// Loop While

let contador = 1;

while (contador <= 5) {
    console.log(`Valor do contador : ${contador}`);
    contador++;
}

console.log("---------------------------------------------------");

// Loop FOR

for( let contador = 1; contador <=10; contador++){

    console.log(`contador vale: ${contador}`);
}