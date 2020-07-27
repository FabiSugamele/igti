var carros = ["Gol", "Palio", "Uno", "Sandero"];

// pop remove o ultimo do elemento array e retorna o elemento removido
var carro = carros.pop();
/*console.log(carro);
console.log(carros);*/

//push insere o elemento no fim do array e retorna seu novo tamanho
var x = carros.push("Ford Ka");
/*console.log(x);
console.log(carros);*/

// shift remove o primeiro elemento do array e retorna ele e atualiza os outros indices
carro = carros.shift();
/*console.log(carro);
console.log(carros);*/

//unshift adiciona um elemento no inicio do array,
//atualiza os outros indices e retorna o novo tamanho do array
x = carros.unshift("Onix");
/*console.log(carros);
console.log(x);*/


