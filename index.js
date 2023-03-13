const chronoContent = document.querySelector(".chrono");
let totalSecond;
let interval;

function countDown() {
  const minutes = Math.floor(totalSecond / 60);
  const second = totalSecond % 60;

  const sec = second < 10 ? "0" + second : second;

  chronoContent.textContent = `${minutes} : ${sec}`;

  if (totalSecond > 0) {
    totalSecond--;
  } else {
    chronoContent.textContent = "C'est terminé !";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert("Entrer un chiffre ! ");
  } else {
    totalSecond = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 100);
  }
});
