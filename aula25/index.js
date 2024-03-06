const nome = prompt("Digite seu nome completo:");

const body = document.querySelector("body");

body.innerHTML = `Seu nome é: ${nome}.<br>`;
body.innerHTML += `Seu nome tem ${nome.length} letras.<br>`;
body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br>`;
body.innerHTML += `Qual o primeiro índice da letra o no seu nome? ${nome.indexOf(
  "o"
)}<br>`;
body.innerHTML += `Qual o último índice da letra o no seu nome? ${nome.lastIndexOf(
  "o"
)}<br>`;
body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(
  -3,
  nome.length
)}<br>`;
body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}<br>`;
body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br>`;
body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br>`;
