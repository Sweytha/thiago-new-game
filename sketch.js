var Steve,Steveimg;
var Bob,Bobimg;
var Germery,Germeryimg;
var Alex,Aleximg;
var Sarah, Sarahimg;
var Emily, Emilyimg;
var John,Johnimg;
var Guilbert, Guilbertimg;
var playsound;
var gameoversound;
var gameoverImg;
var Restartimg;

var CellImage;
var Virus1img;
var Virus2img;
var Virus3img;

var edges;

function preload(){

Virus1img=loadImage("Virus1.jpg");
Virus2img=loadImage("Virus2.jpg");
Virus3img=loadImage("Virus3.jpeg");

CellImage = loadAnimation("sprite_02.png","sprite_11.png","sprite_02.png","sprite_11.png");
}
function setup(){
createCanvas(1000,1000);

Steve = createSprite(250,130,10,20);
Steve.addImage(Virus1img);
Bob = createSprite(400,430,10,20);
Bob.addImage(Virus2img);
Germery = createSprite(720,150,10,20);
Germery.addImage(Virus3img);

Bob.scale=0.2;
Germery.scale=0.2;
Steve.scale=0.2;





Cell = createSprite(250,350,10,10);
Cell.addAnimation("Cell",CellImage);
Cell.scale=0.3;

edges=createEdgeSprites();

Steve.velocityX=3;
Steve.velocityY=4;

Bob.velocityX=3;
Bob.velocityY=4;

Germery.velocityX=3;
Germery.velocityY=4;


}
function draw(){
background("white");



Steve.bounceOff(edges);
Bob.bounceOff(edges);
Germery.bounceOff(edges);

drawSprites();
}