let audio = new Audio("./sounds/tom-1.mp3");

function playSound(ele) {
  let crash;
  if (ele.innerHTML == "w") {
    crash = new Audio("sounds/crash.mp3");
  } else if (ele.innerHTML == "a") {
    crash = new Audio("sounds/kick-bass.mp3");
  } else if (ele.innerHTML == "s") {
    crash = new Audio("sounds/snare.mp3");
  } else if (ele.innerHTML == "d") {
    crash = new Audio("sounds/tom-1.mp3");
  } else if (ele.innerHTML == "j") {
    crash = new Audio("sounds/tom-2.mp3");
  } else if (ele.innerHTML == "k") {
    crash = new Audio("sounds/tom-3.mp3");
  } else {
    crash = new Audio("sounds/tom-4.mp3");
  }
  crash.play();
}
function changeView(i) {
  i.style.color = "white";
}
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    playSound(this);
  });
}
