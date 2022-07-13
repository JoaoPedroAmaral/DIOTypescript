export{}

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let Saldototal = 0;
limparSaldo()

function somarAoSaldo(soma: number) {
  if (campoSaldo){
    Saldototal += soma;
    campoSaldo.innerHTML = Saldototal.toString();
    limparCampoSoma();
    
  } 
}

function limparCampoSoma(){
  soma.value = '';
}

function limparSaldo(){
  if(campoSaldo){
    Saldototal = 0;
    campoSaldo.innerHTML = Saldototal.toString();
  }
}

if (botaoAtualizar){
  botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
  });
}

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});