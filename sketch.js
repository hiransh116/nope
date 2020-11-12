var aprochingMosquitos,fearedMosquitos,can,aprochingMosquitosImg,fearedMosquitosImg,canImg;
var spray,sprayImg;
var count=0;
var life=3;

function preload(){
 aprochingMosquitosImg=loadImage('aproching mosquito.png');
 fearedMosquitosImg=loadImage('fearing mosquitoes.png');
 sprayImg=loadImage('spray1.png');
 canImg=loadImage('canimg.png');


}
function setup() {
  createCanvas(displayWidth,displayHeight);
 // fearedMosquitos.addImage('a',fearedMosquitosImg);
  


}

function draw() {
  background(255); 
   var can=createSprite(200,200);
   can.addImage('c',canImg);
   can.scale=0.4;
   can.velocityY=0;

   var spray=createSprite(can.x+13,can.y-68);
   spray.addImage('s',sprayImg);
   spray.scale=0.7;

  if(spray.isTouching(aprochingMosquitos)){
    aprochingMosquitos.changeImage('a',fearedMosquitosImg)
  }
   
  fill('yellow');
  text('score:'+count,770,100);
  drawSprites();

  spawnMosquitos();
  keyPressed();
}

function spawnMosquitos(){
  if(frameCount%50===0){
  var aprochingMosquitos=createSprite(displayWidth,random(1,displayHeight));
  
  aprochingMosquitos.velocityX=- (6 + 3*count/100);
  aprochingMosquitos.addImage('m',aprochingMosquitosImg);
  aprochingMosquitos.scale=0.3;
  aprochingMosquitos.lifetime=800/-5;
  }
}
function keyPressed(){
  if(keyCode===24){
    can.velocityY=-2;
  }
  if(keyCode===25){
    can.velocityY=2;
  }
}
