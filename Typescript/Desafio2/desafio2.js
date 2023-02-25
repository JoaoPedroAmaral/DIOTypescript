"use strict";
;
let cadastro = document.getElementById('cadastro');
let pessoaCadastrada = [];
function cadastrarPessoa() {
    cadastro.hidden = false;
}
function enviarPessoa() {
    let nome = document.getElementById('nomePessoa');
    let idade = document.getElementById('idadePessoa');
    let profissao = document.getElementById('profissaoPessoa');
    pessoaCadastrada.push({ nome: nome.value, idade: Number(idade.value), profissao: profissao.value });
    console.log(pessoaCadastrada);
    cadastro.hidden = true;
}
