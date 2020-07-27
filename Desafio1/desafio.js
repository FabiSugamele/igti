'use strict';
const fs = require('fs');
function funcionarios(fs){
    var jsonData = fs.readFileSync('funcionarios.json');
    var funcionarios = JSON.parse(jsonData);
    return funcionarios;
}

function funcionarioComMaiorSalario(arrayFuncionarios) {
    var salario = 0;
    var funcionario;

    for(var i = 0; i < arrayFuncionarios.length; i++) {
        if(arrayFuncionarios[i].salario > salario) {
            salario = arrayFuncionarios[i].salario;
            funcionario = arrayFuncionarios[i];
        }
        
    } 
    return funcionario;
}

function funcionarioComMenorSalario(arrayFuncionarios) {
    var salario = (funcionarioComMaiorSalario(arrayFuncionarios)).salario;
    var funcionario;

    for(var i = 0; i < arrayFuncionarios.length; i++) {
        if(arrayFuncionarios[i].salario < salario) {
            salario = arrayFuncionarios[i].salario;
            funcionario = arrayFuncionarios[i];
        }
        
    } 
    return funcionario;
}

function nomeFuncionarioComMaiorSalario(arrayFuncionarios) {
    var funcionario = funcionarioComMaiorSalario(arrayFuncionarios);
    return funcionario.nome;
}

function nomeFuncionarioComMenorSalario(arrayFuncionarios) {
    var funcionario = funcionarioComMenorSalario(arrayFuncionarios);
    return funcionario.nome;

}

function mediaSalarialDaEmpresa(arrayFuncionarios) {
    var mediaSalarial;
    var totalSalarios = 0
    var totalFuncionarios = arrayFuncionarios.length

    for(var i = 0; i < arrayFuncionarios.length; i++) {
        totalSalarios = totalSalarios + arrayFuncionarios[i].salario;
    }    
    mediaSalarial = totalSalarios / totalFuncionarios;
    return mediaSalarial
}

function buscaFuncionariosSetor(arrayFuncionarios, setor) {
    var arrayFuncionariosSetor = [];
    for(var i = 0; i < arrayFuncionarios.length; i++) {
        if(arrayFuncionarios[i].setor == setor) {
            arrayFuncionariosSetor.push(arrayFuncionarios[i]);
        }
    }
    return arrayFuncionariosSetor;
}

function buscaSetores(arrayFuncionarios){
    var arraySetor = [];

    for(var i = 0; i < arrayFuncionarios.length; i++) {
        if(arraySetor.indexOf(arrayFuncionarios[i].setor) == -1) {
            arraySetor.push(arrayFuncionarios[i].setor);
        }
    }
    return arraySetor;
}

function maiorSalarioPorSetor(arrayFuncionarios) {
    var setores = buscaSetores(arrayFuncionarios);
    var arrayfuncionariosSetor = [];
    var funcionario;

    for(var i = 0; i < setores.length; i ++) {
        arrayfuncionariosSetor = buscaFuncionariosSetor(arrayFuncionarios, setores[i]);
        funcionario = funcionarioComMaiorSalario(arrayfuncionariosSetor);
        console.log("Funcionario de maior salario para o setor " + setores[i] + " e " + JSON.stringify(funcionario)); 
    }
}

function menorSalarioPorSetor(arrayFuncionarios) {
    var setores = buscaSetores(arrayFuncionarios);
    var arrayfuncionariosSetor = [];
    var funcionario;

    for(var i = 0; i < setores.length; i ++) {
        arrayfuncionariosSetor = buscaFuncionariosSetor(arrayFuncionarios, setores[i]);
        funcionario = funcionarioComMenorSalario(arrayfuncionariosSetor);
        console.log("Funcionario de menor salario para o setor " + setores[i] + " e " + JSON.stringify(funcionario)); 
    }
}

function mediaSalarialPorSetor(arrayFuncionarios) {
    var setores = buscaSetores(arrayFuncionarios);
    var arrayfuncionariosSetor = [];
    var mediaSalarialPorSetor;

    for (var i = 0; i < setores.length; i ++){
        arrayfuncionariosSetor = buscaFuncionariosSetor(arrayFuncionarios, setores[i]);
        mediaSalarialPorSetor = mediaSalarialDaEmpresa(arrayfuncionariosSetor);
        console.log("A média salarial do setor " + setores[i] + " é " + mediaSalarialPorSetor);
    }
}

var funcionarios = funcionarios(fs);
console.log("O nome do funcionarios de maior salario é: " + nomeFuncionarioComMaiorSalario(funcionarios.funcionarios));
console.log("O nome do funcionarios de menor salario é: " + nomeFuncionarioComMenorSalario(funcionarios.funcionarios));
console.log("A media salarial da empresa é: " + mediaSalarialDaEmpresa(funcionarios.funcionarios));
maiorSalarioPorSetor(funcionarios.funcionarios);
menorSalarioPorSetor(funcionarios.funcionarios);
mediaSalarialPorSetor(funcionarios.funcionarios);
