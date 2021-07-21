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
    resposta.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista");
  }

  numero.value = "";
  numero.focus();
}

function finalizar() {
  if (listaArray.length == 0) {
    window.alert("Adicione valores antes de finalizar");
  } else {
    let tot = listaArray.length;
    let maior = listaArray[0];
    let menor = listaArray[0];
    soma = 0;
    media = 0;

    for (pos in listaArray) {
      soma += listaArray[pos];
      if (listaArray[pos] > maior) {
        maior = listaArray[pos];
      }
      if (listaArray[pos] < menor) {
        menor = listaArray[pos];
      }
    }
    media = soma / tot;
    resposta.innerHTML = "";
    resposta.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.<p>`;
    resposta.innerHTML += `<p>O maior valor informado foi ${maior}.`;
    resposta.innerHTML += `<p>O menor valor informado foi ${menor}.`;
    resposta.innerHTML += `<p>Somando todos os valores temos ${soma}.`;
    resposta.innerHTML += `<p>A média dos valores digitados é ${media}.`;
  }
}
