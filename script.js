const shareButton = document.getElementById("shareButton");
const triviaButton = document.getElementById("triviaButton");
const secretButton = document.getElementById("secretButton");

shareButton.addEventListener("click", () => {
  const width = screen.width * 0.9;
  const height = screen.height * 0.9;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  window.open("share.html", "shareWindow", `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no`);
});

triviaButton.addEventListener("click", () => {
  const width = screen.width * 0.9;
  const height = screen.height * 0.9;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  window.open("trivia.html", "triviaWindow", `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no`);
});

secretButton.addEventListener("click", () => {
  const width = screen.width * 0.9;
  const height = screen.height * 0.9;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  window.open("secret.html", "secretWindow", `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no`);
});
