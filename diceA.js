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
var i = 90;
var j = 0;

TweenMax.set(Scene, {perspective:0});

//Rotates through cubeFace array on each click.
//If i>cubeFace reset to 0 and preform 1st step.

var RotateY = function(){
  TweenMax.to (Cube,.5, {transform: cubeFace[i], ease:Linear.easeNone});

  if (i<cubeFace.length)
  {i++; console.log(i);}

  else{i=1;
    TweenMax.to (Cube,.5, {transform: cubeFace[0], ease:Linear.easeNone});
    console.log(i);}
  }//RotateY Function


var RotateX = function (){
  TweenMax.to(Cube, .5, {transform: "rotateY("+i+"deg)"});
  i+=90;}

//Random Experimental Scene
var tl = new TimelineMax({paused:true, repeat:3});
    tl.yoyo(true);
    tl.to(Cube, 1, {rotation:360})

    .to(Cube, 1, {rotationY:360, rotationX:360}, "-=1")
    .to(Scene,1, {scale:.2},"-=1")
    .to(Cube, 1, {x:500}, "-=1")

    tl.timeScale(1);

var start = function(){tl.restart();};

startAnimation.onclick = start;
buttonX.onclick = RotateY;
buttonY.onclick = RotateX;


//TweenMax would not take Array String used if statement
// var cubeFace2 = [
//   "rotationY:0, rotationX:0",
//   "rotationX:90",
//   "rotationX:180",
//   "rotationX:270",
//   "rotationY:90",
//   "rotationY:180"];
// var rl = new TimelineMax({onComplete:faceRoll});

var rollDie = document.getElementById("RollDie");
 //Roll Die Timeline
var startRoll = function(){
  var randomNum = Math.floor(Math.random() * 3); //between 0 and 5
  var rl = new TimelineMax({onComplete:faceRoll});
  rl.to(Cube,.01, {rotationY:0, rotationX:0});
  rl.to(Cube,3, {rotationY:1800, rotationX:1800});
  rl.to(Scene,3, {scale:.2},"-.1");
  rl.timeScale(4);
  rl.restart();
};

var faceRoll = function(){
var randomNum = Math.floor(Math.random() * 6); //between 0 and 5
  if(randomNum === 0){
    TweenMax.to(Cube,.2, {rotationY:0, rotationX:0},"-1");
    TweenMax.to(Scene, .2, {scale:1}, "-1");
  }
  if(randomNum === 1){
    TweenMax.to(Cube,.2,{rotationX:90, scale:1},"-1");
    TweenMax.to(Scene, .2, {scale:1}, "-1");
  }
  if(randomNum === 2){
    TweenMax.to(Cube,.2,{rotationX:180, scale:1},"-1");
    TweenMax.to(Scene, .2, {scale:1}, "-1");
  }
  if(randomNum === 3){
    TweenMax.to(Cube,.2,{rotationX:270, scale:1},"-1");
    TweenMax.to(Scene, .2, {scale:1}, "-1");
  }
  if(randomNum === 4){
    TweenMax.to(Cube,.2,{rotationY:90, scale:1},"-1");
    TweenMax.to(Scene, .2, {scale:1}, "-1");
  }
  if(randomNum === 5){
    TweenMax.to(Cube,.2,{rotationY:270, scale:1},"-1");
    TweenMax.to(Scene, .2, {scale:1}, "-1");
  }
  console.log(randomNum);
}//FaceRoll If Statement

rollDie.onclick = startRoll;
