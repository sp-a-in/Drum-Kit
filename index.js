
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function ()
  {
    buttonAnimation(this.innerHTML)
    var buttonPressed=this.innerHTML;

    switch (buttonPressed) {
      case "w":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();

      case "a":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();

      case "s":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();

      case "d":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();

      case "j":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();

      case "k":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
        break;

        case "l":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
      default: console.log(buttonPressed);

    }
  });
}

document.addEventListener("keypress", function(event) {
  buttonAnimation(event.key);
  switch (event.key) {
    case "w":
    var crash=new Audio("sounds/crash.mp3");
    crash.play();

    case "a":
    var kick=new Audio("sounds/kick-bass.mp3");
    kick.play();

    case "s":
    var snare=new Audio("sounds/snare.mp3");
    snare.play();

    case "d":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();

    case "j":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();

    case "k":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
      break;

      case "l":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
    default: console.log(buttonPressed);

  }
});


function buttonAnimation(key)
{
  var activeButton=document.querySelector("."+key).classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
//
// var audio=new Audio('sounds/crash.mp3');
// audio.play();
