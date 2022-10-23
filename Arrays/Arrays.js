//1. Faça um algoritmo para ler 20 números e armazenar em um array. Após a leitura total dos 20 números, o algoritmo deve escrever esse array.
var num = [];
for (i=0; i<20; i++){
    num[i]= prompt("Digite 20 numeros");
}
alert("Os numero foi "+ num)
console.log(num); 
 
//2. Faça um algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50.


var acima = []
var abaixo = []

for (i=0; i<12; i++){
   var entrada = parseInt(prompt("Digite 12 numeros aleatorios:"));
    if (entrada >=50){
      acima.push(entrada)
   }
   else {
      abaixo.push(entrada)
   }
}
document.write ('Os números digitados maiores a 50 são: '+ acima+"<br>");
document.write ('Os números digitados menores que 50 são: '+ abaixo +"<br>");

console.log(acima);
console.log(abaixo);



/*3. Drofo e Topper estão em uma aventura mágica. Faça um programa que contenha um inventário para cada um dos dois aventureiros - esse inventário será um array.
Drofo terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do sono e duas poções da inocência em seu inventário e nessa ordem. 
Torper terá uma capa da invisibilidade, uma pedra do despertar,  uma varinha das varinhas, uma poção da inocência e duas poções da mentira, poção anti-inteligência e nessa ordem. 

No meio de sua jornada, Torper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica. 
Descreva cada uma das ações acima. utilizando código (utilize comentários para ficar mais claro). 

No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.
Descreva cada uma das ações acima. utilizando código.

Exiba o resultado final de cada um dos inventários utilizando "document.write". /*/
var Drofo = ["Porção do sono", "Botas mágicas","Anel invisibilidade", "poções da inocência", "poções da inocência"];
var Torper = ["Pedra despertar", "Capa Invisibilidade", "varinhas", "poção da inocência", "poção da mentira","poção da mentira","poção anti-inteligência"];
var TorperNew = []
Torper.forEach((item) => {
   if (!TorperNew.includes(item)){  // Torper consumiu uma das poções da mentira
      TorperNew.push(item);
   }
});
TorperNew.shift(); // Perdeu sua pedra


TorperNew.push("Um par de botas mágicas", "Escudo Mágico", "Espada Mágica"); // e ganhou um par de bota magicas do drofo, achou um escudo magico e uma espada mágica
console.log(TorperNew);

Drofo.push("Bota mágica", "Ovo de Dragão", "Coxinha"); // Drofo ganhou mais uma bota
Drofo.shift(); // consumiu uma poçao do sono

console.log(Drofo)

document.write ('O inventário de Drofo ficou: '+ Drofo +"<br>");
document.write ('O inventário de Topper ficou: '+ Torper +"<br>");

