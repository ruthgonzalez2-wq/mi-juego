let score = 0;
let time = 10;
let started = false;

var btn = document.getElementById("btn");
var scoreText = document.getElementById("score");
var timeText = document.getElementById("time");
var result = document.getElementById("result");

btn.onclick = function() {

  if (!started) {
    started = true;

    var timer = setInterval(function() {
      time--;
      timeText.innerText = time;

      if (time === 0) {
        clearInterval(timer);
        btn.disabled = true;
        result.innerText = "Juego terminado. Puntos: " + score;
      }
    }, 1000);
  }

  if (time > 0) {
    score++;
    scoreText.innerText = score;
  }
};
