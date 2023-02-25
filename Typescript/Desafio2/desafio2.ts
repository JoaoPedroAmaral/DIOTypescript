interface pessoa {
  nome: string,
  idade: number,
  profissao: string
};

let cadastro = document.getElementById('cadastro') as HTMLAreaElement
let pessoaCadastrada: pessoa[] = []

function cadastrarPessoa() {
  cadastro.hidden = false
}

function enviarPessoa() {
  let nome = document.getElementById('nomePessoa') as HTMLInputElement
  let idade = document.getElementById('idadePessoa') as HTMLInputElement
  let profissao = document.getElementById('profissaoPessoa') as HTMLInputElement

  pessoaCadastrada.push({nome:nome.value, idade: Number(idade.value), profissao:profissao.value})

  console.log(pessoaCadastrada)

  cadastro.hidden = true

}
