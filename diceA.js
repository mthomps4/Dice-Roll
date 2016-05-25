// var cube = $(".scene .cube");
// var animate = TweenMax.to(cube, 3, {opacity:.5;});
var i=90;

$("#StartB").on("click", function(){
  var cube = $(".scene .cube");
  TweenLite.to(cube, 1, {transform: "rotateX("+i+"deg)"});
  i+=90;
});

$("#StartC").on("click", function(){
  var cube = $(".scene .cube");
  TweenLite.to(cube, 1, {transform: "rotateY("+i+"deg)"});
  i+=90;
});
