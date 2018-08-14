//Target number picked at random between 19-120
var targetNumber = (Math.floor(Math.random()*101+19));
console.log(targetNumber);

//Counter to track the number of clicks on the crystal image
var counter = 0; 
$(".crystal-image").on("click", function() {
    //Add 1 to the counter each time the crytsal image is clicked by the user
    counter += 1;

    alert("You clicked this crystal! " + counter + " times!");
});