const shareButton = document.getElementById("shareButton");
const triviaButton = document.getElementById("triviaButton");
const secretButton = document.getElementById("secretButton");

shareButton.addEventListener("click", () => {
  window.open("share.html", "_blank");
});

triviaButton.addEventListener("click", () => {
  window.open("trivia.html", "_blank");
});

secretButton.addEventListener("click", () => {
  window.open("secret.html", "_blank");
});
