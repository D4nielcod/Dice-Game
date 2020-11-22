alert("Player Two's turn");

// for the first dice
var imageGotten = document.querySelectorAll('.first');
imageArray = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'];

document.getElementById('myBtn').onclick = function changeContent() {
  newArray = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'].sort(function() {
    return .5 - Math.random();
  });

  a = document.querySelectorAll('.first')[0].src = newArray[0];
  b = document.querySelectorAll('.first')[1].src = newArray[1];

  if (a=='dice1.png') {

  }
}
