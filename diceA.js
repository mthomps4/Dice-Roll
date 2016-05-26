//Main DOM Variables and Selectors

//Selects Cube Face X via CSS Degree Rotatation
var cubeFace = [
  "translateX(200px)",
  "rotateX(90deg)",
  "rotateX(180deg)",
  "rotateX(270deg)"];

var startAnimation = document.getElementById("StartA"); //Start Animation Button
var buttonY = document.getElementById("StartB"); //Rotate Y Button (Still Rotates around X?)
var buttonX = document.getElementById("StartC"); // Rotate X Button
var Cube = document.querySelectorAll(".scene .cube");
var i = 0;

//Rotates through cubeFace array on each click.
//If i>cubeFace reset to 0 and preform 1st step.

var RotateY = function(){
  TweenMax.to (Cube,.5, {transform: cubeFace[i], ease:Linear.easeNone});
  if (i<cubeFace.length)
  {i++; console.log(i);}

  else{i=1;
    TweenMax.to (Cube,.5, {transform: cubeFace[0], ease:Linear.easeNone});
    console.log(i);}
}

var RotateX = function (){
  TweenMax.to(Cube, .5, {transform: "rotateY("+i+"deg)"});
  i+=90;}

//Place this in function to control time to button specific action
var tl = new TimelineMax();

    tl.from(Cube, 1, {rotationX:0})
    .to(Cube, 1, {rotationX:90})
    .to(Cube, 1, {rotationX:180})
    .to(Cube, 1, {rotationX:270})
    .to(Cube, 1, {rotationX:360});

    // tl.totalDuration(2);
    tl.timeScale(6);


var start = function(){tl.restart();};
startAnimation.onclick = start;
buttonX.onclick = RotateY;
buttonY.onclick = RotateX;
