/*Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. */

let anoNascimento
let anoAtual
let idadeAnos
let idadeMeses
let idadeDias
let idadeSemanas

anoNascimento = Number(prompt('Em que ano você nasceu?'))
anoAtual = Number(prompt('Em que ano estamos'))

idadeAnos = anoAtual - anoNascimento
idadeMeses = idadeAnos * 12
idadeSemanas = idadeMeses * 4345
idadeDias = idadeSemanas * 7

alert("Então sua idade é de: \nAnos: "+idadeAnos+"\nMeses: "+idadeMeses+"\nSemanas: "+(idadeSemanas).toFixed(0)+"\nDias: "+(idadeDias).toFixed(0))