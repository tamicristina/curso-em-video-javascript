function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  //   let hora = data.getHours();
  let hora = 7;
  msg.innerHTML = `Agora são ${hora} horas <br>`;

  if (hora >= 0 && hora < 12) {
    //Bom dia
    msg.innerHTML += `Bom dia !`;
    img.src = "./img/fotomanha.png";
    document.body.style.background = "#c58748";
  } else if (hora >= 12 && hora <= 18) {
    msg.innerHTML += `Boa Tarde !`;
    img.src = "./img/fototarde.png";
    document.body.style.background = "#856347";
  } else {
    img.src = "./img/fotonoite.png";
    msg.innerHTML += `Boa Noite !`;
    document.body.style.background = "#3c3c3c";
  }
}
