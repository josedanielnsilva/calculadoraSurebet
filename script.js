// Criar constantes
const oddCasa1 = document.querySelector("#odd1")
oddCasa1.value = 2
const oddCasa2 = document.querySelector("#odd2")
oddCasa2.value = 2
const viavel = document.querySelector("#surebet")
const erroValor = document.querySelector("#erroValores")
const aposta1 = document.querySelector("#valor1")
aposta1.value = 100
const aposta2 = document.querySelector("#valor2")
aposta2.value = 100
const apostaTotal = document.querySelector("#valorApostado")
apostaTotal.value = 200
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


let odd1 = Number(oddCasa1.value)
let odd2 = Number(oddCasa2.value)
let valor1 = Number(aposta1.value)
let valor2 = Number(aposta2.value)
let valorTotal = Number(apostaTotal.value)
let percentual = (1 / (1 / odd1 + 1 / odd2) - 1) * 100

oddCasa1.addEventListener("input", validar)
oddCasa2.addEventListener("input", validar)
aposta1.addEventListener("input", calcularAposta1)
aposta2.addEventListener("input", calcularAposta2)
apostaTotal.addEventListener("input", calcularTotal)
validar()

function validar() {
  odd1 = Number(oddCasa1.value)
  odd2 = Number(oddCasa2.value)
  percentual = (1 / (1 / odd1 + 1 / odd2) - 1) * 100
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
  if (odd1 < 1 || odd2 < 1) {
    viavel.textContent = "Preencha os campos das odds corretamente"
    viavel.className = "negativo"
    aposta1.value = ""
    aposta2.value = ""
    apostaTotal.value = ""
    retorno1.textContent = ""
    retorno2.textContent = ""
    return
  }
  if (percentual > 0) {
    viavel.textContent = "Surebet encontrada: " + percentual.toFixed(2) + "%"
    viavel.className = "positivo"
  } else {
    viavel.textContent =
      "Não existe Surebet: margem de " + percentual.toFixed(2) + "%"
    viavel.className = "negativo"
  }
  calcularTotal()
}

function calcularAposta1() {
  if (odd1 < 1 || odd2 < 1) {
    viavel.textContent = "Preencha os campos das odds corretamente"
    viavel.className = "negativo"
    return
  } else {
    valor1 = Number(aposta1.value)
    if (valor1 >= 0) {
      valor2 = (odd1 * valor1) / odd2
      aposta2.value = valor2.toFixed(2)
      apostaTotal.value = (valor1 + valor2).toFixed(2)
      retorno1.textContent = (odd1 * valor1 - valor1 - valor2).toFixed(2)
      retorno2.textContent = (odd2 * valor2 - valor1 - valor2).toFixed(2)
      erroValor1.style.display = "none"
      erroValor2.style.display = "none"
      erroValor.textContent = ""
    } else {
      erroValor.textContent = "Preencha os valores corretamente"
      erroValor1.style.display = "block"
      aposta2.value = ""
      apostaTotal.value = ""
      retorno1.textContent = ""
      retorno2.textContent = ""
    }
  }
}
function calcularAposta2() {
  if (odd1 < 1 || odd2 < 1) {
    viavel.textContent = "Preencha os campos das odds corretamente"
    viavel.className = "negativo"
    return
  } else {
    valor2 = Number(aposta2.value)
    if (valor2 >= 0) {
      valor1 = (odd2 * valor2) / odd1
      aposta1.value = valor1.toFixed(2)
      apostaTotal.value = (valor1 + valor2).toFixed(2)
      retorno1.textContent = (odd1 * valor1 - valor1 - valor2).toFixed(2)
      retorno2.textContent = (odd2 * valor2 - valor1 - valor2).toFixed(2)
      erroValor1.style.display = "none"
      erroValor2.style.display = "none"
      erroValor.textContent = ""
    } else {
      erroValor.textContent = "Preencha os valores corretamente"
      erroValor2.style.display = "block"
      aposta1.value = ""
      apostaTotal.value = ""
      retorno1.textContent = ""
      retorno2.textContent = ""
    }
  }
}
function calcularTotal() {
   if (odd1 < 1 || odd2 < 1) {
     viavel.textContent = "Preencha os campos das odds corretamente"
     viavel.className = "negativo"
     return
   }
  valorTotal = Number(apostaTotal.value)
  if (valorTotal >= 0) {
    valor1 = (valorTotal * odd2) / (odd1 + odd2)
    valor2 = (valorTotal * odd1) / (odd1 + odd2)
    aposta1.value = valor1.toFixed(2)
    aposta2.value = valor2.toFixed(2)
    retorno1.textContent = (odd1 * valor1 - valor1 - valor2).toFixed(2)
    retorno2.textContent = (odd2 * valor2 - valor1 - valor2).toFixed(2)
    erroValor1.style.display = "none"
    erroValor2.style.display = "none"
    erroValor.textContent = ""
  }else{
      erroValor.textContent = "Preencha os valores corretamente"
      erroValor2.style.display = "block"
      aposta1.value = ""
      aposta2.value = ""
      retorno1.textContent = ""
      retorno2.textContent = ""

  }
}
