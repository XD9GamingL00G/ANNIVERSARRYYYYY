document.addEventListener('DOMContentLoaded', () => {
  const triviaButton = document.getElementById("triviaButton");
  const secretButton = document.getElementById("secretButton");

  if (triviaButton) {
    triviaButton.addEventListener("click", () => {
      window.open("trivia.html", "_blank");
    });
  }

  if (secretButton) {
    secretButton.addEventListener("click", () => {
      window.open("secret.html", "_blank");
    });
  }
});
