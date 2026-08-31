const botao = document.getElementById("mudarHumor");
const emoji = document.getElementById("emoji");
const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const cartao = document.querySelector(".cartao");

let humor = 0;

const emojis = ["💻", "🥤", "🐛", "🚀", "💀"];

const titulos = [
  "MODO PROGRAMADOR",
  "PRECISO DE Energético",
  "BUG DETECTADO",
  "CÓDIGO FUNCIONANDO!",
  "ERRO 404: PACIÊNCIA"
];

const mensagens = [
  "Código aberto. Vamos programar!",
  "Sem cafeina, nenhum código funciona.",
  "O código funcionava antes...",
  "Funcionou de primeira! Isso é raro.",
  "A Página não foi encontrada de Novo."
];

const cores = [
  "#00ff66",
  "#00ccff",
  "#cc44ff",
  "#ff3333",
  "#ff8800"
];

botao.addEventListener("click", () => {

  humor++;

  humor = humor % 5;

  emoji.textContent = emojis[humor];

  titulo.textContent = titulos[humor];

  mensagem.textContent = mensagens[humor];

  document.body.style.color = cores[humor];

  cartao.style.borderColor = cores[humor];

  botao.style.color = cores[humor];

  botao.style.borderColor = cores[humor];

});