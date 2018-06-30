var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Have a great evening!';
} else if (hourNow > 12) {
    greeting = 'Have a great afternoon!';
} else if (hourNow > 0) {
    greeting = 'Have a great morning!';
} else {
    greeting = 'You rock!';
}


var element = document.getElementById("footer-content");
element.innerHTML = greeting;