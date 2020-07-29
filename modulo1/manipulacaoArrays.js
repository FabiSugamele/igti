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

//atualizar elemento do indice
carros[2] = "Novo Uno";
//console.log(carros);

//remove elemento do indice informado deixando um undefined no lugar
/*delete carros[2];
console.log(carros[2]);*/

/* 
primeiro parametro: posição inicial
segundo parametro: quantos elementos serão removidos a partir da posição inicial
terceiro e demais parametros: elementos que serão inseridos a partir da posição inicial
*/

carros.splice(2, 0, "HRV", "Creta");
console.log(carros);

carros.splice(2,1);
//console.log(carros);

//concat concatena um array em outro e retorna o nome array criado
var carrosAntigos = ["Brasilia", "Monza", "Fusca"];
var carrosAntigos2 = ["Corcel", "Chevete"];
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2);
//console.log(todosCarros);

var novoArray = todosCarros.slice(1);
console.log(todosCarros);
console.log(novoArray);




