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
var Cube = document.querySelectorAll(".cube");
var Scene = document.querySelectorAll(".scene");
var i = 0;

TweenMax.set(Cube, {perspective:0});

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
var tl = new TimelineMax({paused:true, repeat:5});
    tl.yoyo(true);
    tl.to(Cube, 1, {rotation:360})
    // .to(Scene, 1, {scale:.5}, "-=1")
    // .to(Scene, 1, {scale:.1},  "-=1")
    // .to(Cube, 1, {rotationX:90}, "-=1")
    // .to(Scene, 1, {scale:1.3}, "-=.5")
    // .to(Cube, 1, {rotationY:90}, "-=1")
    // .to(Cube, 1, {rotation:0}, "-=1")
    .to(Cube, 1, {rotationY:360, rotationX:360}, "-=1")
    .to(Scene,1, {scale:.2},"-=1")
    .to(Cube, 1, {x:500}, "-=1")
    // .to(Scene, 1, {scale:1}, "-=.5")


    // .to(Cube, 1, {rotation:0}, "-=1");

    // tl.totalDuration(2);
    tl.timeScale(1);


var start = function(){tl.restart();};
startAnimation.onclick = start;
buttonX.onclick = RotateY;
buttonY.onclick = RotateX;
