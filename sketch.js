//Create variables here
var dog,happyDog;
var database;
var foodS;
var foodStock;
var dogImg;

function preload()
{
  dogImg = loadImage("images/doglmg.png")
  happyDog = loadImage("imagesdoglmg1.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database()
  foodStock = database.ref('Food');
  foodSrock.on("value",readStock);

  var dog = createSprite()
  dog.addImage(dogImg)
  
}


function draw() {  

  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here

  text("Note: Press UP_ARROW Key To Feed Drago Milk!")
  textSize(20)
  fill("black")
  stroke("white")
}

//function to read value from db
function readStock(){
  foodS = data.val();
}

//function to write values in db
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({

  })
}

