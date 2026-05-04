const shareButton = document.getElementById("shareButton");
const triviaButton = document.getElementById("triviaButton");
const secretButton = document.getElementById("secretButton");

shareButton.addEventListener("click", () => {
  const message = "Happy Anniversary! Wishing you many more years of love and joy together.";

  if (navigator.share) {
    navigator.share({
      title: "Anniversary Celebration",
      text: message,
      url: window.location.href,
    }).catch(() => {});
  } else {
    window.prompt("Share this message:", message);
  }
});

triviaButton.addEventListener("click", () => {
  const trivia = "How much do I love you?\nA. ALOT ALOT\nB. SO MUCH I DONT EVEN KNOW WHAT TO DO WITH MYSELF\nC. SO MUCH THAT I WABBA BE WITH YOU FOREVER AND EVER";
  let answer = window.prompt(trivia, "A");
  if (!answer) return;

  answer = answer.trim().toUpperCase();

  if (answer === "A" || answer === "B" || answer === "C") {
    window.alert("You already know the answer: I love you more than words can say. 💖");
  } else {
    window.alert("Please choose A, B, or C so the love can win.");
  }
});

secretButton.addEventListener("click", () => {
  const secretMessage = "I WUVVVVV YOU BABYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY THESE PAST 5 MONTHS HAVE BEEN THE BEST MONTHS OF MY LIFE, EVERY DAY I GOT TO SPEND WITH YOU IS A DAY I NEVER WANT TO FORGET, YOU MAKE ME SO HAPPY EVEN, EVEN JUST TALKING TO MAKES MY DAYS BETTER GETTING TO SPEND THE DAY WITH THE LOVE OF MY LIFE IS SOMETHING I NEVER WANT TO LOSE. I LOVE YOU ISHAANI FOREWER AND EWER AND EWERRRRRRR, YOUVE BECOME A PART OF MY LIFE I NEVER WANT TO LOSE, YOUR MY WORLD, MY EVERYTHING, YOU MEAN IT ALL TO ME AND YOU ALWAYS WILLLLLL, im lowkey just waiting for the day I get to tell you that to your face, I love you sweetie and I always will😝😘 - Devraaj (The Goat)";
  window.alert(secretMessage);
});
