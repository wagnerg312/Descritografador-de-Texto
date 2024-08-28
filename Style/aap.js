let input = document.querySelector("#inputText");
let buttonEncrypt = document.querySelector("#encrypt");
let buttonDecrypt = document.querySelector("#decrypt");
let inputForm = document.querySelector("#inputForm");
let buttonCopy = document.querySelector("#buttonForm");


function encryptWord(word) {
  return word
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decryptWord(wordEncrypt) {
  return wordEncrypt
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function showInputForm(text){
  inputForm.style.display = "block";
  inputForm.textContent = text;
  buttonCopy.style.display = "block";

  document.getElementById("textOne").style.display = "none";
  document.getElementById("textTwo").style.display = "none";
  document.getElementById("imgIcon").style.display = "none";
}

function showInformation(){
  document.getElementById("textOne").style.display = "block";
  document.getElementById("textTwo").style.display = "block";
  document.getElementById("imgIcon").style.display = "block";

  inputForm.style.display = "none";
  buttonCopy.style.display = "none";
}

// função para encriptografar palavras
function encrypt() {
  let texto = input.value.trim();

  if (texto !== "") {
    if (/^[a-z ]+$/.test(texto)) {
      let textEncrypt = texto.split(" ").map(encryptWord).join(" ");
      showInputForm(textEncrypt);
    } else {
      alert("Por favor, digite apenas letras minusculas.");
    }
  } else {
    alert("Por favor, digite um texto antes de criptografar");
  }
}


function decrypt() {
  let texto = inputForm.textContent.trim();

  if (texto !== "") {
    if (/^[a-z ]+$/.test(texto)) {
      let textDecrypt = texto.split(" ").map(decryptWord).join(" ");
      showInputForm(textDecrypt);
    } else {
      alert("Texto descriptografado inválido. Certifique-se de usar apenas letras minúsculas e os caracteres especiais utilizados na criptografia.");
    }
  } else {
    alert("Nenhum texto criptografado para descriptografar");
  }
}

buttonEncrypt.addEventListener("click", encrypt);
buttonDecrypt.addEventListener("click", decrypt);


buttonCopy.addEventListener("click", function () {
  let tempTextArea = document.createElement("textarea");

  tempTextArea.value = inputForm.textContent;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  document.execCommand("copy");
  alert("Texto copiado para área de transferência");
 
  tempTextArea.style.display = "none";
})