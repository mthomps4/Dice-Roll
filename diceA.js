// var cube = $(".scene .cube");
// var animate = TweenMax.to(cube, 3, {opacity:.5;});
var i = 0;
var buttonY = document.getElementById("StartB");
var buttonX = document.getElementById("StartC");
var Cube = document.querySelectorAll(".scene .cube");

var RotateX = function(){
  TweenLite.to(Cube, .2, {transform: "rotateX("+i+"deg)"});
  i+=90;}

var RotateY = function (){
  TweenLite.to(Cube, .2, {transform: "rotateY("+i+"deg)"});
  i+=90;}

buttonX.onclick = RotateX;

buttonY.onclick = RotateY;
