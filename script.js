const shareButton = document.getElementById("shareButton");
const triviaButton = document.getElementById("triviaButton");
const secretButton = document.getElementById("secretButton");

shareButton.addEventListener("click", () => {
  window.open("share.html", "shareWindow", "width=800,height=600,menubar=no,toolbar=no");
});

triviaButton.addEventListener("click", () => {
  window.open("trivia.html", "triviaWindow", "width=700,height=800,menubar=no,toolbar=no");
});

secretButton.addEventListener("click", () => {
  window.open("secret.html", "secretWindow", "width=800,height=900,menubar=no,toolbar=no");
});
