var x = 5; //Column
var y = 4; //Row

//Tile generator
var tileRow = '<ul class=\'tileRow\'></ul>';
for (i = 1; i <= y; i++) {
  $('#playingBoard').append(tileRow);
}

var tileColumn = '<li><div class=\'tile\'><div class=\'tile-front\'></div><div class=\'tile-back\'></div></div></li>';
for (i = 1; i <= x; i++) {
  $('.tileRow').append(tileColumn);
}

var tileArray = [];
$('.tile').each(function() {
  tileArray.push($(this).children('.tile-back')[0]); //[0] converts jQuery object to DOM element
});

// Fisher-Yates shuffle
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
var colorArray = ["orange", "orange", "pink", "pink", "red", "red", "purple", "purple",
  "blue", "blue", "green", "green", "brown", "brown", "yellow", "yellow", "orange", "orange", "pink", "pink", "red", "red", "purple", "purple",
  "blue", "blue", "green", "green", "brown", "brown", "yellow", "yellow"
];

shuffle(colorArray);

while (tileArray.length > 0) {
  tileArray[0].style.backgroundColor = colorArray[i];
  colorArray.splice(i, 1);
  tileArray = [].slice.call(tileArray, 1);
}

//Click2flip
var tileActive = $('.tile').length;

function tileClickControl() {
  var tileActive = $('.active').length;
  if (tileActive < 2) {
    $(this).toggleClass('active');
    return tileActive;
  } else {
    $('.tile').removeClass('active');
    $(this).toggleClass('active');
    return tileActive;
  }
}

$('.tile').click(tileClickControl);





// const gameContainer = document.getElementById("game");

// const COLORS = [
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple",
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple"
// ];

// // here is a helper function to shuffle an array
// // it returns the same array with values shuffled
// // it is based on an algorithm called Fisher Yates if you want ot research more
// function shuffle(array) {
//   let counter = array.length;

//   // While there are elements in the array
//   while (counter > 0) {
//     // Pick a random index
//     let index = Math.floor(Math.random() * counter);

//     // Decrease counter by 1
//     counter--;

//     // And swap the last element with it
//     let temp = array[counter];
//     array[counter] = array[index];
//     array[index] = temp;
//   }

//   return array;
// }

// let shuffledColors = shuffle(COLORS);

// // this function loops over the array of colors
// // it creates a new div and gives it a class with the value of the color
// // it also adds an event listener for a click for each card
// function createDivsForColors(colorArray) {
//   for (let color of colorArray) {
//     // create a new div
//     const newDiv = document.createElement("div");

//     // give it a class attribute for the value we are looping over
//     newDiv.classList.add(color);

//     // call a function handleCardClick when a div is clicked on
//     newDiv.addEventListener("click", handleCardClick);

//     // append the div to the element with an id of game
//     gameContainer.append(newDiv);
//   }
// }

// // TODO: Implement this function!
// function handleCardClick(event) {
//   // you can use event.target to see which element was clicked
//   console.log("you just clicked", event.target);
// }

// // when the DOM loads
// createDivsForColors(shuffledColors);
