let totalButton = document.querySelectorAll("button").length;

// Fungsi untuk memainkan suara berdasarkan tombol
function playSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("Invalid key: " + key);
  }
}

// Fungsi untuk menambahkan animasi pada tombol
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 2000);
  }
}

// Event listener untuk klik tombol
for (let i = 0; i < totalButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Event listener untuk keyboard input
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});
