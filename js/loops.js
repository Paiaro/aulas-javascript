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

for( let i = 1; i <=10; i++){

    console.log(`contador vale: ${i}`);
}
//obs: normalmente, variaveis de controle de repetição são chamadas de "i", "j", "k"

// Loop para acessar arrays

const alunos =["Chaves","chapolin","Madruga"];

for (let i = 0; i < alunos.length;i++) {
    console.log(alunos[i]);
    
}