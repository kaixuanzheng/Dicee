// Player1 throw the dicee
var randomNumber1 = Math.ceil(Math.random() * 6);
document.querySelector(".img1").setAttribute("src", "images\\dice"+randomNumber1+".png");

// Player2 throw the dicee
var randomNumber2 = Math.ceil(Math.random() * 6);
document.querySelector(".img2").setAttribute("src", "images\\dice"+randomNumber2+".png");

// Deciding who //
if (randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent = "Player 2 wins!";
}
else
{
  document.querySelector("h1").textContent = "Draw!";
}
