var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var obstacle,obstacleGrp,obstacleimg;
var form, player, game;
var car1,car2,car3,car4,cars,car;
var car1img,car2img,car3img,car4img,track,ground;
var aud;
var sound1,sound2,sound3,sound4,sound5,sound6;
var trophy;
function preload(){
  car1img=loadImage("car1.png")
  car2img=loadImage("car2.png")
  car3img=loadImage("car3.png")
  car4img=loadImage("car4.png")
  track=loadImage("track.jpg")
 obstacleimg=loadImage("obstacle.png")
  car=loadImage("download.jpg")

sound1=loadSound("p.mp3")
sound2=loadSound("button-16.mp3")
sound3=loadSound("button-37.mp3")
sound4=loadSound("o.mp3")
sound5=loadSound("k.mp3")

backgroundImage=loadImage("38275.png")
trophy=loadImage("j.png")
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}


function draw(){
 background(backgroundImage)
  if(playerCount === 4){
    game.update(1);
   
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
  if(gameState===2){
game.end();
  }
}
