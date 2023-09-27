//VARIAVEIS

let phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo",
];

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookieButton = document.querySelector("#closedCookie");
const resetButton = document.querySelector("#resetButton");
const cookiePhrase = screen2.querySelector("p");

//FUNCOES

function toggleScreen(event){
  event.preventDefault();

  let randomPhrase = phrases[Math.floor(Math.random()*9)];

  cookiePhrase.innerText = randomPhrase;


  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

//EVENTOS

cookieButton.addEventListener("click", toggleScreen);
resetButton.addEventListener("click", toggleScreen);