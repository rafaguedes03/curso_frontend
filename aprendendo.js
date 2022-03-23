//LET > POSSIVEL ALTERAR OS VALORES
let vIngresso = 20
console.log(vIngresso)
vIngresso = 450
console.log(vIngresso)

// CONST > VALOR CONSTANTE
//const valoring = 20
//console.log(valoring)
//valoring = 450
//console.log(valoring)

//========================================================

let nome = 'Rafa' //string literal
let idd = 18.3 // number numerico
let trueORfalse = true // boolean verdadeiro ou falso
let sobrenome //Undefined
let sobrenome0 = undefined // serve mas é bem pouco usado
let corSelecionada = null //reset, redefinir um valor

//=======================================================
// TIPAGEM DINAMICA NO JAVASCRIPT
//ELE É INTELIGENTE E SABE SE É STRING, NUMBER ETC....

//OBJETO JUNTAR INFORMACOES

let pessoa = {
  nome0: 'Rafael',
  idd0: 18,
  alt0: (170, 'cm'),
  sobrenome1: 'Lima Guedes',
  nasc: '01 / 03 / 2003'
}
console.log(pessoa)

//Arrays conjunto de dados que pode ser acessado por um indicie
//indice é uma posicao exata de onde se encontra uma informação nesse conjunto de informação

let familia = [17, 'Rafa', 18, true]

console.log(familia)

//NO CONSOLE NAVEGADOR
//Array (4)
//0: 17
//1: 'Rafa'
//2: 18
//3: true
//length: 4
//para acessar esse valor bastar usar a seguinte sintaxe
console.log(familia.length)
console.log(familia[1])

let gustavo = ['Gustavo', '24 anos', '3 metros']
console.log(gustavo)

//function | VERBO + SUBSTANTIVO |

let corSite = 'azul'

function resetaCor() {
  corSite = ''
}

console.log(corSite)
resetaCor()
console.log(corSite)

//function com parametros
let corSite1 = ''
function escolhaCor(cor) {
  corSite1 = cor
}
console.log(corSite1)
escolhaCor('vermelho')
console.log(corSite1)

// adicionar mais funcionalidades
let corSitee = 'amarelo'

function resetaCorr(cor, tonalidade) {
  corSitee = cor + ' ' + tonalidade
}

console.log(corSitee)
resetaCorr('verde', 'escuro')
console.log(corSitee)

//TIPOS DE FUNÇÕES

//1 REALIZA UMA TAREFA E NAO DEVOLVE NADA
function dizernome() {
  console.log('Rafa')
}
dizernome()

//RETORNA ALGO
function multiplicarPorDois(valor) {
  return valor * 2
}
console.log(multiplicarPorDois(4))

//console.log(multiplicarPorDois(7))
let resultado = multiplicarPorDois(7)
console.log(resultado)

//OPERADORES ARITIMÉTICOS(MATEMATICOS)
//OPERADORES DE ATRIBUIÇÃO
//OPERADORES DE COMPARAÇÃO
//OPERADORES LÓGICOS
//OPERADORES BITWISE

//ARITIMETICOS
let salario = 100

//   +   -   *   /   **  %
console.log(salario + salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(salario ** 3)
console.log(salario - salario)

// ++ --
let idd1 = 18
console.log(idd1++)
//só irá aparecer o valor na proxima exibição
console.log(idd1)

//se colocar o ++ antes exibe na hora
console.log(++idd1)
//mesma coisa para o  --

// ATRIBUICAO =
