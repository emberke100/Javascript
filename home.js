//document.getElementById('sText').innerHTML = "Hey Friend"

//var age = prompt('What is your age?');

var q = 10;
window.setInterval(myFunction, 100);

function myFunction() {
    document.getElementById('sText').innerHTML = q;
    q++;
  }
  