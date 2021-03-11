//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");


}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(50,50, 250,250);
 dog.addImage(dog);
 database = firebase.database();
foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  text("Note: Press UP ARROW key to feed Drago milk!", 250, 50);
  fill("black");
  textSize(15);
  stroke("blue");
}
  drawSprites();
  //add styles here
text("foodStock", 250, 450);
fill("black");
textSize(15);
stroke("blue");

}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



