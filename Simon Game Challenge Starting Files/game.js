let useClickedPattern = [];
let started = false;
let level = 0;
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  level = level + 1;
  $("h1").text("level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");
  useClickedPattern.push(userChosenColour);

  let audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
  $(this).addClass("pressed");
  setTimeout(() => {
    $(this).removeClass("pressed");
  }, 100);
  let currentIndex = useClickedPattern.length - 1;

  if (useClickedPattern[currentIndex] == gamePattern[currentIndex]) {
    if (useClickedPattern.length == gamePattern.length) {
      useClickedPattern = [];

      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    gamePattern = [];
    level = 0;
    let sound = new Audio("sounds/wrong.mp3");
    sound.play();
    $("h1").text("Game over place any key to start");
    started = false;
  }
});

$(document).on("keydown", () => {
  if (started == false) {
    setTimeout(() => {
      nextSequence();
    }, 1000);

    started = true;
  }
});
