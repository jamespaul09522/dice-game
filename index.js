//generating random number from 1 to 6
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

//converting random numbers into random dice
var diceImg1 = "images/dice"+randomNumber1+".png";
var diceImg2 = "images/dice"+randomNumber2+".png";

// adding random dice into our websites
var dice1 = document.querySelectorAll("img")[0].setAttribute("src", diceImg1);
var dice2 = document.querySelectorAll("img")[1].setAttribute("src", diceImg2);

//adding the result on the header
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "&#10024; player 1 wins";
}else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 wins &#10024;";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
