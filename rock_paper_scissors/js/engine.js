/*Set variables*/

var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;


/* Listen for the button clicks
$("#rock").click(function(event) {
  var play_you = 'rock';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});

$("#paper").click(function(event) {
  var play_you = 'paper';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});

$("#scissors").click(function(event) {
  var play_you = 'scissors';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});

*/


/*New condensed function to listen for clicks and update text*/

$("button").click(function(event) {

  var play_you = this.getAttribute("value");
  console.log(play_you);
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);

});



/*Function for computer's move*/

function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);
  return play_machine;
}


/*function to determine who won*/
function compare(you, machine) {
  var verdict = 'lose';

  if (you == machine) {
    verdict = 'draw';
  }
  else if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  }
  else if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  }
  else if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

/*
  if (verdict == 'win') {
    won++;
    $("#game_won").text(won);
  }

  else if (verdict == 'lose') {
    lost++;
    $("#game_lost").text(lost);
  }

  else if (verdict == 'draw') {
    draw++;
    $("#game_draw").text(draw);
  }

*/

/*Condensed function to update tally*/

switch(verdict){
  case "win":
  won++;
  $("#game_won").text(won);
  $("#resultimage").attr("src","images/win.png");
  break;
  case "lose":
  lost++;
  $("#game_lost").text(lost);
  $("#resultimage").attr("src","images/lose.png");

  break;
  case "draw":
  draw++;
  $("#game_draw").text(draw);
  $("#resultimage").attr("src","images/draw.png");
  break;
}

$("#verdict").text(verdict);
played++;

$("#game_played").text(played);
}

/*Code for buttons to stay clicked color*/

$('button[type="button"]').click(function() {
  $('button[type="button"].color').removeClass("color");
  $(this).addClass("color");
});


/*change image based on result*/

/*var d = new Date().getDay()
var dayImg = document.getElementById('dayImage');
dayImg.src = "image"+d+".png";


var gameresult = get.verdict

var resultimage = document.getElementById('resultimage');
resultimage.src = 'image' + gameresult +".png"*/







