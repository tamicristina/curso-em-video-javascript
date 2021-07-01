let inicio = document.querySelector("#inicio");
let fim = document.querySelector("#fim");
let passo = document.querySelector("#passo");
let resposta = document.querySelector("#res");
let contador = 0; // valor inicial

function contar() {
  resposta.innerHTML = `<p> Contando:</p>`;
  if (
    inicio.value.length == "" ||
    fim.value.length == "" ||
    passo.value.length == ""
  ) {
    resposta.innerHTML = `<p> Impossível contar!</p>`;
  } else if (Number(passo.value) == Number(0)) {
    window.alert("Passo inválido! Considerando PASSO 1");
    for (
      contador = Number(inicio.value);
      contador <= Number(fim.value);
      contador++
    ) {
      resposta.innerHTML += ` ${contador} &#128073`;

      console.log(contador);
    }
  }

  if (Number(passo.value) > 0) {
    for (
      contador = Number(inicio.value);
      contador <= Number(fim.value);
      contador += Number(passo.value)
    ) {
      resposta.innerHTML += ` ${contador} &#128073`;
    }
  }

  if (Number(inicio.value) > Number(fim.value)) {
    for (
      contador = Number(inicio.value);
      contador >= Number(fim.value);
      contador -= Number(passo.value)
    ) {
      resposta.innerHTML += ` ${contador} &#128073`;
    }
  }
}
