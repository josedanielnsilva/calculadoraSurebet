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
oddCasa1.addEventListener("input", calcular)
oddCasa2.addEventListener("input", calcular)
aposta1.addEventListener("input", calcular)
aposta2.addEventListener("input", calcular)
calcular()
function calcular() {
  if (
    oddCasa1.value === "" ||
    oddCasa2.value === "" ||
    aposta1.value === "" ||
    aposta2.value === ""
  ) {
    viavel.textContent = "Preencha todos os campos"
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
