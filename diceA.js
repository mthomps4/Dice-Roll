// var cube = $(".scene .cube");
// var animate = TweenMax.to(cube, 3, {opacity:.5;});
var cubeFace = [
  "translateX(200px)",
  "rotateX(90deg)",
  "rotateX(180deg)",
  "rotateX(270deg)"];
var buttonY = document.getElementById("StartB");
var buttonX = document.getElementById("StartC");
var Cube = document.querySelectorAll(".scene .cube");
var i = 0;

var RotateX = function(){
  TweenMax.to (Cube,.5, {transform: cubeFace[i], ease:Linear.easeNone});
  if (i===3){i===0;}else{i++}
}

var RotateY = function (){
  TweenMax.to(Cube, .5, {transform: "rotateY("+i+"deg)"});
  i+=90;}

buttonX.onclick = RotateX;

buttonY.onclick = RotateY;
