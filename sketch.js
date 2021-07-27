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
var x=100;
var y=100;

var CellImage;
var Virus1img;
var Virus2img;
var Virus3img;

function preload(){

Virus1img=loadImage("Virus1.jpg");
Virus2img=loadImage("Virus2.jpg");
Virus3img=loadImage("Virus3.jpeg");

CellImage = loadAnimation("sprite_02.png","sprite_11.png","sprite_02.png","sprite_11.png");
}
function setup(){
createCanvas(1000,1000);

Steve = createSprite(x+20,y+30,10,20);
Steve.addImage(Virus1img);
Bob = createSprite(x+230,y+30,10,20);
Bob.addImage(Virus2img);
Germery = createSprite(x+120,y+900,10,20);
Germery.addImage(Virus3img);

Bob.scale=0.5;
Germery.scale=0.5;





Cell = createSprite(350,350,10,10);
Cell.addAnimation("Cell",CellImage);
Cell.scale=0.3;


}
function draw(){
background("white");
drawSprites();
}