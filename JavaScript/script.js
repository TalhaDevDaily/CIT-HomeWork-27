// ------------------------- dom part start
const p1Box = document.querySelector(".p1box");
const p1Error = document.querySelector(".p1error");
const p1InputField = document.querySelector(".p1input");
const p1Btn = document.querySelector(".p1btn");
const p2box = document.querySelector(".p2box");
const p2Counter = document.querySelector(".p2-counter");
const p2Error = document.querySelector(".p2error");
const p2InputField = document.querySelector(".p2input");
const p2Btn = document.querySelector(".p2btn");
const winner = document.querySelector(".winner");
const p2Header = document.querySelector(".p2-header");
const winnerAnnouncement = document.querySelector(".winner-announce");
const reloadPage = document.querySelector(".retry");
let i = 0;
p2Counter.innerHTML = i;

p1Btn.addEventListener("click", function () {
  if (!p1InputField.value) {
    p1Error.innerHTML = `Enter a Value!`;
  } else if (p1InputField.value > 10 || p1InputField.value < 0) {
    p1Error.innerHTML = `Value must be within 0 - 10`;
  } else {
    p1Error.innerHTML = ``;
    p1Box.style = "display: none;";
    p2box.style = "display: flex;";
    p2Header.style = "display: flex;";
  }
});

p2Btn.addEventListener("click", function () {
  if (!p2InputField.value) {
    p2Error.innerHTML = `Enter a Value!`;
  } else if (p2InputField.value > 10 || p2InputField.value < 0) {
    p2Error.innerHTML = `Value must be within 0 - 10`;
  } else {
    p2Error.innerHTML = ``;
    if (p1InputField.value == p2InputField.value) {
      p2box.style = "display: none;";
      winner.style = "display: block;";
      winnerAnnouncement.innerHTML = `Player 2 Wins!! 🏆🎊`;
    } else {
      i++;
      p2Counter.innerHTML = i;
      console.log(i);
      if (i == 5) {
        p2box.style = "display: none;";
        winner.style = "display: block;";
        winnerAnnouncement.innerHTML = `Player 1 Wins!! 🏆🎊`;
      }
    }
  }
});

reloadPage.addEventListener("click", function () {
  location.reload();
});
