const buttonEncrypt = document.getElementById("button-encrypt");
const buttonDecrypt = document.getElementById("button-decrypt");
const buttonCopy = document.getElementById("button-copy");
const messageResult = document.getElementById("result");
const alert = document.getElementById("alert");

// Encriptar texto
buttonEncrypt.addEventListener("click", (e) => {
  e.preventDefault();
  const message = document.getElementById("message");
  var encrypted = CryptoJS.AES.encrypt(message.value, "123").toString();
  messageResult.value = encrypted;
});
// Desencriptar texto
buttonDecrypt.addEventListener("click", (e) => {
  e.preventDefault();
  const message = document.getElementById("message");
  var decrypted = CryptoJS.AES.decrypt(message.value, "123").toString(
    CryptoJS.enc.Utf8
  );
  messageResult.value = decrypted;
});
// Copiar texto
buttonCopy.addEventListener("click", (e) => {
  messageResult.select();
  messageResult.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(messageResult.value);
  alert.classList.add('active');
  setTimeout(() => {
    alert.classList.remove('active');
  }, 3000);
})
