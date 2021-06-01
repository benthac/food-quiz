var goButton = document.querySelector("#mainButton");
console.log("goButton");
goButton.addEventListener("click", function(){
    alert("I heard that");
});
// question slideshow that triggers on click
// click should also trigger a countdown timer
var sec = 60;
var time = setInterval(mytimer, 1000);

function myTimer() {
    document.getElementById('#timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Game Over!");
    }
}