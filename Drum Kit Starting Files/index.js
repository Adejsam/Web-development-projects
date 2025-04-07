// Add mouse click  function into you button
var numOfButton = document.querySelectorAll(".drum").length;
for( var i = 0; i<numOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", buttonClick); //note: no parenthesis
}
 function buttonClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
 }

// add the keyboard press function to your button
document.addEventListener("keypress", keyboardPress);
function keyboardPress (event){
    makeSound(event.key);
    buttonAnimation(event.key);
}

// Enables your button to make sound based on the key pressed
function makeSound(keys){
    switch(keys){
     case "w":
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
        break;
    case "a":
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
    case "s":
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;
    case "d":
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;  
    case "j":
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
        break; 
    case "k":
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
    case "l":
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        break;
    default: console.log(buttonInnerHTML);
    }
}

// Add animations to a button 
function buttonAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {activeButton.classList.remove("pressed")},100)
}
