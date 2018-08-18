
//Target number picked at random between 19-120
var targetNumber = (Math.floor(Math.random()*101+19));
console.log(targetNumber);

//Append the random target number to the HTML document
$('#targetNumber').text(targetNumber);

//Each crystal will be assigned randomly a value between 1 and 12
var crystal1 = Math.floor(Math.random()*11+1);
var crystal2 = Math.floor(Math.random()*11+1);
var crystal3 = Math.floor(Math.random()*11+1);
var crystal4 = Math.floor(Math.random()*11+1);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

//Variables
var userTotal = 0; 
var wins = 0;
var losses = 0;

//Reset game once the target number is reached or exceeded
function reset() {
  targetNumber = (Math.floor(Math.random()*101+19));
  console.log(targetNumber);
  $('#targetNumber').text(targetNumber);
  crystal1 = Math.floor(Math.random()*11+1);
  crystal2 = Math.floor(Math.random()*11+1);
  crystal3 = Math.floor(Math.random()*11+1);
  crystal4 = Math.floor(Math.random()*11+1);
  userTotal = 0;
  $('#finalTotal').text(userTotal);
}

//Add wins to the win total
function winner (){
  alert("You are a winner!");
  wins++;
  $('#numberWins').text(wins);
  reset();
}

//Add losses to loss total
function loser () {
  alert("You lost! Try Again!");
  losses++;
  $('#numberLosses').text(losses);
  reset();
}

//Set up user clicks for each of the crystals
$('#one').on("click", function() {
  userTotal = userTotal + crystal1;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal);
    //Win/lose if statement
    if (userTotal == targetNumber) {
      winner();
    }
    else if (userTotal > targetNumber) {
      loser();
    }
})

$('#two').on("click", function() {
  userTotal = userTotal + crystal2;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal);
  //Win/lose if statement
  if (userTotal == targetNumber) {
    winner();
  }
  else if (userTotal > targetNumber) {
    loser();
  }
})

$('#three').on("click", function() {
  userTotal = userTotal + crystal3;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal);
  //Win/lose if statement
  if (userTotal == targetNumber) {
    winner();
  }
  else if (userTotal > targetNumber) {
    loser();
  }
})

$('#four').on("click", function() {
  userTotal = userTotal + crystal4;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal);
  //Win/lose if statement
  if (userTotal == targetNumber) {
    winner();
  }
  else if (userTotal > targetNumber) {
    loser();
  }
})