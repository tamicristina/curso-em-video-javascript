let inicio = document.querySelector("#inicio");
let fim = document.querySelector("#fim");
let passo = document.querySelector("#passo");
let resposta = document.querySelector("#res");

function contar() {
  resposta.innerHTML = `<p> Contando:</p>`;
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    resposta.innerHTML = `<p> Impossível contar!</p>`;
  } else {
    let p = Number(passo.value);

    if (p <= 0) {
      window.alert("Passo inválido! Considerando PASSO 1");
      p = 1;
      console.log(p);
    }
    if (Number(inicio.value) < Number(fim.value)) {
      for (let c = Number(inicio.value); c <= Number(fim.value); c += p) {
        resposta.innerHTML += ` ${c} &#128073`;
      }
    } else {
      for (
        let c = Number(inicio.value);
        c >= Number(fim.value);
        c -= Number(passo.value)
      ) {
        resposta.innerHTML += ` ${c} &#128073`;
      }
    }
    resposta.innerHTML += `\u{1F3C1}`;
  }
}
