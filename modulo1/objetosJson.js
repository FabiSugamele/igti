var pessoa = {
    nome: "Joao",
    idade: 40,
    telefone: "(99) 99999-9999",
    temCarro: true,
    animaisDeEstimacao: [
        "Totó",
        "Bob"
    ],
    pai: {
        nome: "José",
        idade: 68
    }
};
//console.log(pessoa);
//console.log(pessoa.nome);
//pessoa.animaisDeEstimacao.push("Billy");
//pessoa.nome += " Silvia";
//console.log(pessoa);
pessoa.mae = {
    nome: "Maria",
    idade: 68,
};

console.log(JSON.stringify(pessoa));

/*salvarDadosPessoa(pessoa);

function salvarDadosPessoa(pessoa) {
    console.log(pessoa);
}*/



