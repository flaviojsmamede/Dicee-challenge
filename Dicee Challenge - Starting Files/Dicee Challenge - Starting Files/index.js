// new variable called randomNumber1 with the value of a random number between 1 and 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// alert (randomNumber1);

//Pick a random dice image using randomNumber1 and place it on the right place

var randomImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);

//Do the same for dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImage2);

//Change the title to show who won

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 WINS!"
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 WINS!"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
};
