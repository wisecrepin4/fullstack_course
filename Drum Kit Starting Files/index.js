let audio = new Audio("./sounds/tom-1.mp3");

function playSound(ele) {
  let crash;
  if (ele.innerHTML == "w" || ele.key == "w") {
    crash = new Audio("sounds/crash.mp3");
  } else if (ele.innerHTML == "a" || ele.key == "a") {
    crash = new Audio("sounds/kick-bass.mp3");
  } else if (ele.innerHTML == "s" || ele.key == "s") {
    crash = new Audio("sounds/snare.mp3");
  } else if (ele.innerHTML == "d" || ele.key == "d") {
    crash = new Audio("sounds/tom-1.mp3");
  } else if (ele.innerHTML == "j" || ele.key == "j") {
    crash = new Audio("sounds/tom-2.mp3");
  } else if (ele.innerHTML == "k" || ele.key == "k") {
    crash = new Audio("sounds/tom-3.mp3");
  } else if (ele.innerHTML == "l" || ele.key == "l")
    crash = new Audio("sounds/tom-4.mp3");

  crash.play();
}
function changeView(i) {
  i.style.color = "white";
}
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    playSound(this);
    makeAnimation(this.innerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  playSound(event);
  makeAnimation(event.key);
});

function makeAnimation(ele) {
  let activeButton = document.querySelector("." + ele);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
