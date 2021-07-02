function gerarTabuada() {
  let numerotxt = document.querySelector("#numero");
  let tabuada = document.querySelector("#resptab");
  console.log(tabuada);

  if (numerotxt.value.length == 0) {
    window.alert("Por favor, digite um numero!");
  } else {
    let numero = Number(numerotxt.value);
    tabuada.innerHTML = "";

    for (let c = 1; c <= 10; c++) {
      let contador = numero * c;
      let item = document.createElement("option");
      item.text = `${numero} x ${c} = ${contador}`;
      item.value = `tab${c}`;
      tabuada.appendChild(item);
    }
  }
}
