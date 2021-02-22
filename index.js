var aButton = document.getElementsByClassName("drum");

for (var i = 0; i < aButton.length; i++) {
  aButton[i].addEventListener("click", function() {
    var cur = this.innerHTML;
    curLetterCheck(cur);
    buttonAnimation(cur);

  });
}

document.addEventListener("keydown", function(event){
  var cur = event.key;
  curLetterCheck(cur);
  buttonAnimation(cur);
});

function curLetterCheck(curLetter){
  switch (curLetter) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(curLetter);

  }
}

function buttonAnimation(cur){
  var button = document.querySelector("." + cur);
  button.classList.add("pressed");

  setTimeout(function() {
    button.classList.remove("pressed");
  },100);
}
