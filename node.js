const input = require("readline-sync")
const nome = input.question("Qual o nome do aluno? ")
const n1 = Number(input.question("Nota do primeiro bimestre: "))
const n2 = Number(input.question("Nota do segundo bimestre: "))
const n3 = Number(input.question("Nota do terceiro bimestre: "))
const n4 = Number(input.question("Nota do quarto bimestre: "))
const media = (n1 + n2 + n3 + n4) / 4

if (media >= 7) {
    console.log(`${nome} ficou com média ${media} - APROVADO ✅`)
} else if (media >= 5) {
    console.log(`${nome} ficou com média ${media} - RECUPERAÇÃO ⚠️`)
} else {
    console.log(`${nome} ficou com média ${media} - REPROVADO ❌`)
}