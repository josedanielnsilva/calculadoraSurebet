// Criar constantes
const oddCasa1 = document.querySelector("#odd1")
oddCasa1.value = 2
const oddCasa2 = document.querySelector("#odd2")
oddCasa2.value = 2
const viavel = document.querySelector("#surebet")
const aposta1 = document.querySelector("#valor1")
aposta1.value = 100
const aposta2 = document.querySelector("#valor2")
aposta2.value = 100
const total = document.querySelector("#valorApostado")
const retorno1 = document.querySelector("#lucrocaso1")
const retorno2 = document.querySelector("#lucrocaso2")

// Em caso de erro
const erroOdd1 = document.querySelector("#erroOdd1")
erroOdd1.textContent = "O valor deve ser maior ou igual a 1."

const erroOdd2 = document.querySelector("#erroOdd2")
erroOdd2.textContent = "O valor deve ser maior ou igual a 1."
const erroValor1 = document.querySelector("#erroValor1")
erroValor1.textContent = "O valor deve ser maior ou igual a 0."
const erroValor2 = document.querySelector("#erroValor2")
erroValor2.textContent = "O valor deve ser maior ou igual a 0."

oddCasa1.addEventListener("input", calcular)
oddCasa2.addEventListener("input", calcular)
aposta1.addEventListener("input", calcular)
aposta2.addEventListener("input", calcular)
calcular()

function calcular() {
  if (Number(oddCasa1.value) >= 1) {
    erroOdd1.style.display = "none"
  } else {
    erroOdd1.style.display = "block"
  }
  if (Number(oddCasa2.value) >= 1) {
    erroOdd2.style.display = "none"
  } else {
    erroOdd2.style.display = "block"
  }
  if (Number(aposta1.value) >= 0) {
    erroValor1.style.display = "none"
  } else {
    erroValor1.style.display = "block"
  }
  if (Number(aposta2.value) >= 0) {
    erroValor2.style.display = "none"
  } else {
    erroValor2.style.display = "block"
  }
  if (
    Number(oddCasa1.value) < 1 ||
    Number(oddCasa2.value) < 1 ||
    Number(aposta1.value) < 0 ||
    Number(aposta2.value) < 0
  ) {
    viavel.textContent = "Preencha todos os campos corretamente"
  } else {
    const odd1 = Number(oddCasa1.value)
    const odd2 = Number(oddCasa2.value)
    const valor1 = Number(aposta1.value)
    const valor2 = Number(aposta2.value)
    const percentual = 100 - ((1 / odd1) * 100 + (1 / odd2) * 100)
    viavel.textContent = percentual.toFixed(2) + "%"

    total.textContent = valor1 + valor2
    retorno1.textContent = (odd1 * valor1 - valor1 - valor2).toFixed(2)
    retorno2.textContent = (odd2 * valor2 - valor1 - valor2).toFixed(2)
  }
}
