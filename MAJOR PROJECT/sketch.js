var bg;
var form,game,player,playerCount;
var gameState=0;
var jet1,jet2;
var jets;
var allPlayers;
function preload(){
  bg =loadImage("bg.jpg")
  jet1=loadImage("jet.png")
  jet2=loadImage("jet1.png") 
}


function setup(){
    createCanvas(displayWidth-50,displayHeight-150);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }
  

function draw(){
  background("white")
  if(playerCount===2){
   //playerCount=1+;
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  
  }
 if(gameState===2){
  //clear() 
  game.end()
 }
}


