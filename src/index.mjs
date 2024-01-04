import "./styles.css";

var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stockQuantity = document.querySelector("#stock-quantity");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

button.addEventListener("click", buttonHandler);

function buttonHandler() {
  var ip = initialPrice.value;

  var qty = stockQuantity.value;

  var curr = currentPrice.value;

  calculateProfitandLoss(ip, qty, curr);
}

function calculateProfitandLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = initial - current;
    var lossPercentage = (loss * 100) / initial;
    lossPercentage = parseInt(lossPercentage, 10);
    // console.log(`loss ${loss} and ${lossPercentage}`);
    colorChange("red");
    showOutput(
      `Oops your in loss of ${loss} and your loss percentage is ${lossPercentage}%`,
    );
  } else if (current > initial) {
    var profit = current - initial;
    var profitPercentage = (profit / initial) * 100;
    profitPercentage = parseInt(profitPercentage, 10);
    colorChange("green");
    showOutput(
      `YOUR IN PROFIT OF ${profit} and profit percentage is ${profitPercentage}%`,
    );

    console.log("profit");
  } else {
    console.log("no pain no gain");
    colorChange("yellow");
    showOutput(`NO PAIN NO GAIN`);
  }
}
function colorChange(color) {
  document.getElementById("output").style.color = color;
}
function showOutput(message) {
  document.getElementById("output").innerHTML = message;
}
