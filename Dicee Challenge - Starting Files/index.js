var randomNum = (Math.floor((Math.random() *6)))+1;
var randomDiceImg = "dice" + randomNum + ".png";
var randomDiceImgSource = "images/"+randomDiceImg;

var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomDiceImgSource);


var randomNum1 = (Math.floor((Math.random() *6)))+1;
var randomDiceImg1 = "dice" + randomNum1 + ".png";
var randomDiceImgSource1 = "images/"+randomDiceImg1;

var image = document.querySelectorAll("img")[1];
image.setAttribute("src", randomDiceImgSource1);

if (randomNum>randomNum1){
    document.querySelector("h1").textContent = "Player one won";
}
 
else if(randomNum1>randomNum){
    document.querySelector("h1").textContent = "Player two won";
}

else{
    document.querySelector("h1").textContent="Draw";
}