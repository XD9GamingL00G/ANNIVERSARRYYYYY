const triviaButton = document.getElementById("triviaButton");
const secretButton = document.getElementById("secretButton");

triviaButton.addEventListener("click", () => {
  window.open("trivia.html", "_blank");
});

secretButton.addEventListener("click", () => {
  window.open("secret.html", "_blank");
});
