const input = require("readline-sync")
const salario = Number(input.question("Qual seu salário? "))
const quantidade = Number(input.question("Quantos gastos você tem? "))

const gastos = []

for (let i = 0; i < quantidade; i++) {
    const nome = input.question("Informe o nome do gasto: ")
    const valor = Number(input.question("Digite o valor do gasto: "))
    gastos.push({ nome, valor })
}

let total = 0

for (let i = 0; i < gastos.length; i++) {
    total += gastos[i].valor
}

const saldo = salario - total

console.log("=====================================")
console.log("RELATÓRIO DE GASTOS")
console.log("=====================================")
for (let i = 0; i < gastos.length; i++) {
    console.log(`${gastos[i].nome}: R$ ${gastos[i].valor}`)
}
console.log("=====================================")
console.log(`Salário: R$ ${salario}`)
console.log(`Total gasto: R$ ${total}`)
console.log(`Saldo restante: R$ ${saldo}`)

if (saldo > 0) {
    console.log("Status: Você está no AZUL! ✅")
} else if (saldo === 0) {
    console.log("Status: Você está no LIMITE! ⚠️")
} else {
    console.log("Status: Você está no VERMELHO! ❌")
}


