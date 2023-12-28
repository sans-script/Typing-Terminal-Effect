// Função responsável por criar uma animação de digitação para o título da página, o heading_arr
function TypeWriterHeading() {
  const heading_arr = ["Me chamo Alex"]; // Guarda um array contendo uma string
  let i = 0;
  let text_elem = document.getElementById("typewriter_heading");
  let word = heading_arr[i].split("");
  let type = function () {
    if (word.length > 0) {
      text_elem.innerHTML += word.shift();
    }
  };
  setInterval(type, 150); // Chama a função type a cada 120 milissegundos, ou seja, é meio que o tempo entre a inserçãso de cada caractere na tela
}

let body_arr = ["Sou garoto de pro"];
let body_delword = "programador";

// Função responsável por criar uma animação de digitação e exclusão do texto da página
function TypeWriterBody() {
  let i = 0;
  let text_elem = document.getElementById("typewriter_body");
  let word = body_arr[i].split("");
  let delcounter = 0;
  let finished = false;

  // Aqui é definida uma função responsável por realizar a animação de digitação e exclusão
  let type = function () {
    if (word.length > 0) {
      text_elem.innerHTML += word.shift();
    } else if (delcounter < 13) {
      text_elem.innerText = text_elem.innerText.slice(
        0,
        text_elem.innerText.length - 1
      );
      delcounter++;
    } else if (!finished) {
      word = body_delword.split("");
      finished = true;
    }
  };
  setInterval(type, 150); // Chama a função type a cada 120 milissegundos, ou seja, é meio que o tempo entre a inserçãso de cada caractere na tela
}


// Tempo para o começo de cada animação
setTimeout(function () {
  dollar = document.querySelector('.dollar2')
  TypeWriterHeading();
  $(".typewriter_caret.heading").show();
}, 1000);
setTimeout(function () {
  TypeWriterBody();
  $(".typewriter_caret.heading").hide();
  $(".typewriter_caret.body").show();
  
  dollar.style.display = 'inline';
}, 5000);
