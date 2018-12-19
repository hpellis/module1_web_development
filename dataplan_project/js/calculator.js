//Customisations for Solo Surfer Buttons

$('button[type="submit"]').click(function() {
  $('button[type="submit"].blue').removeClass("blue");
  $(this).addClass("blue");
});

//Customisations for Chatterbox Buttons

$('button[type="button"]').click(function() {
  $('button[type="button"].blue').removeClass("blue");
  $(this).addClass("blue");
});

//Choices for the Plan Calculator for Solo Surfer

$(".solo--price").click(function(event) {

  var solo_price = parseInt(this.getAttribute("data-solo-price"));
  $("#solo-cost-monthly").text(solo_price);
  $("#solo-cost-annual").text(solo_price * 12);
})
//Variable for chatterbox calculator

var chatter_gb = 0;
var chatter_mins = 0;
var chatter_price = 0;

//Choices for Plan Calculator for Chatterbox
function chatter_total() {
  chatter_price = chatter_mins + chatter_gb;
  $("#chatter-cost-monthly").text(chatter_price);
  $("#chatter-cost-annual").text(chatter_price * 12);
}

$(".chatter--gb").click(function(event) {
  chatter_gb = parseInt(this.getAttribute("data-chatter-price"));
});


$(".chatter--mins").click(function(event) {

  chatter_mins = parseInt(this.getAttribute("data-chatter-mins-price"));
  chatter_total();

});
//Variables for Family Calculator
var family_sims = 0;
var family_gb = 0;
var family_price = 0;
var base_price = 0;
var addition_price = 0;

//Choices for Plan Calculator for family
function family_total() {
  family_price = base_price + ((addition_price) * (family_sims - 1))

  $("#family-cost-monthly").text(family_price);
  $("#family-cost-annual").text(family_price * 12);
}

$(".family--sims").click(function(event) {
  family_sims = parseInt(this.getAttribute("data-num-family-sims"));
});

$(".family--gb").click(function(event) {

  base_price = parseInt(this.getAttribute("data-family-price"));

});

$(".family--gb").click(function(event) {

  addition_price = parseInt(this.getAttribute("data-family-addition"));
  family_total();

});
