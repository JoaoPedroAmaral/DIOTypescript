"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let Saldototal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    Saldototal += soma;
    campoSaldo.innerHTML = Saldototal.toString();
    limparCampoSoma();
}
function limparCampoSoma() {
    soma.value = '';
}
function limparSaldo() {
    Saldototal = 0;
    campoSaldo.innerHTML = Saldototal.toString();
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
