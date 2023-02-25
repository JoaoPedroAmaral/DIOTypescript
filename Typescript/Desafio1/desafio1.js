"use strict";
let employee = {
    idade: 2,
    profissao: "Nenhuma",
    estadocivil: "Solteiro",
    peso: 10
};
let idade = document.getElementById('idade');
idade.textContent = `Jhon tem ${employee.idade} anos de idade`;
let estadoCivil = document.getElementById('estadoCivil');
estadoCivil.textContent = `Jhon está ${employee.estadocivil}`;
let profissao = document.getElementById('profissao');
profissao.textContent = `Jhon é ${employee.profissao}`;
let peso = document.getElementById('peso');
peso.textContent = `Jhon pesa ${employee.idade}KG`;
function enviarDado() {
    let newDadoIdade = document.getElementById('newDadoIdade');
    let newDadoProfissao = document.getElementById('newDadoProfissao');
    let newDadoEstadoCivil = document.getElementById('newDadoEstadoCivil');
    let newDadoPeso = document.getElementById('newDadoPeso');
    if (Number(newDadoIdade.value) > employee.idade) {
        idade.textContent = `Jhon tem ${Number(newDadoIdade.value)} anos de idade`;
        employee.idade = Number(newDadoIdade.value);
        console.log(employee.idade);
    }
    if (typeof newDadoEstadoCivil.value == 'string' && newDadoEstadoCivil.value != "") {
        estadoCivil.textContent = `Jhon está ${newDadoEstadoCivil.value}`;
    }
    if (typeof newDadoProfissao.value == 'string' && newDadoProfissao.value != "") {
        profissao.textContent = `Jhon é ${newDadoProfissao.value}`;
    }
    if (Number(newDadoPeso.value) > 10 && Number(newDadoPeso.value) < 125) {
        peso.textContent = `Jhon pesa ${newDadoPeso.value}KG`;
        console.log(typeof newDadoPeso);
    }
}
