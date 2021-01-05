
var countDownDate = new Date("Dec 25, 2021 0:0:0").getTime(); 

var x = setInterval(function() {
  var now = new Date().getTime();
 

  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".hours").innerHTML = hours;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown").remove();
    document.querySelector("h1").innerHTML = "<div class='mediaTimer'></div><div class='endTimer'>Merry Christmas!</div>"
    
  }
}, 1000);
