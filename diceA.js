// var cube = $(".scene .cube");
// var animate = TweenMax.to(cube, 3, {opacity:.5;});
var i = 0;
var buttonY = document.getElementById("StartB");
var buttonX = document.getElementById("StartC");
var Cube = document.querySelectorAll(".scene .cube");

buttonX.onclick = function(){
  TweenLite.to(Cube, 1, {transform: "rotateX("+i+"deg)"});
  i+=90;
}

buttonY.onclick = function(){
  TweenLite.to(Cube, 1, {transform: "rotateY("+i+"deg)"});
  i+=90;
}
