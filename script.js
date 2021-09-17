var num_tentvas = 5;
var num_secreto = parseInt(Math.random() * 11); // gera o numero aleatorio

function atualizaTentativas() {
  console.log("Tentativa: " + num_tentvas + " numero secreto: " + num_secreto);
  var elemente = document.getElementById("tentativa");
  //textContent é igual ao innerHTML?
  elemente.textContent = "Voce tem " + num_tentvas + " tentativas";
}

function mudarImg(posicao) {
  var elemento = document.getElementById("imgBomba");
  switch (posicao) {
    case 1:
      elemento.src =
        "http://3.bp.blogspot.com/-rFOgztSzrpY/UXNKITnUpuI/AAAAAAAACFM/iC-q24QuEq0/s640/cake.jpg";
      break;
    case 2:
      elemento.src =
        "https://e7.pngegg.com/pngimages/610/103/png-clipart-time-bomb-explosion-detonation-bomb-logo-fictional-character.png";
      break;
    case 3:
      elemento.src =
        "https://inacioaraujo.blogfolha.uol.com.br/files/2015/08/bomba.jpg";
      break;
  }
}

function reiniciar() {
  mudarImg(3);
  num_tentvas = 5;
  num_secreto = parseInt(Math.random() * 11);
  atualizaTentativas();
}

function Chutar() {
  var num = parseInt(document.getElementById("valor").value);
  var elemento = document.getElementById("resultado");
  if (num >= 0 && num <= 10) {
    if (num == num_secreto) {
      mudarImg(1);
      elemento.textContent = "Parabens, numero correto!!!";
      num_tentvas = 5;
      num_secreto = parseInt(Math.random() * 11);
    } else {
      num_tentvas--;
      if (num_tentvas < 1) {
        mudarImg(2);
        elemento.textContent = "Game Over!!!";
      } else if (num > num_secreto)
        elemento.textContent = "Hummm, numero incorreto. Tento um numero menor";
      else
        elemento.textContent = "Hummm, numero incorreto. Tento um numero maior";
    }
  } else elemento.textContent = "So aceito numeros de 0 a 10";
  atualizaTentativas();
}