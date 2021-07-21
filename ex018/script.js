let numero = document.querySelector("#numero");
let listatxt = document.querySelector("#lista");
let resposta = document.querySelector("#res");
let listaArray = [];
let btnFinalizar = document.querySelector("#btnfinalizar");

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  //passando como parâmetro a variável numero na função isNumero, in lista ta recebendo o valor e a lista
  if (isNumero(numero.value) && !inLista(numero.value, listaArray)) {
    listaArray.push(Number(numero.value));
    let numeroLista = document.createElement("option");
    numeroLista.text = `Valor ${numero.value} adicionado`;
    listatxt.appendChild(numeroLista);
  } else {
    window.alert("Valor inválido ou já encontrado na lista");
  }

  numero.value = "";
  numero.focus();

  //   let numero = Number(numerotxt.value);
  //   let numeroLista = document.createElement("option");

  //   if (numero > 100) {
  //     window.alert("Valor inválido ou já encontrado na lista");
  //   }
  //   if (numero == 0) {
  //     // window.alert("Valor inválido ou já encontrado na lista");
  //   }
  //   if (numero >= 1 && numero <= 100) {
  //     numeroLista.text = `Valor ${numero} adicionado`;
  //     listatxt.appendChild(numeroLista);
  //     listaArray.push(numero);
  //   }

  //   btnFinalizar.addEventListener("click", function () {
  //     let soma = 0;
  //     for (i = 0; i <= listaArray.length; i++) {
  //       resposta.innerHTML = `Ao todo, temos ${listaArray.length} números cadastrados`;
  //     }
  //   });
}
