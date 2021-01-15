
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var sideBin,bottomBin,rightSide;
var ground,paper;
var edges;
var dustBinObj,dustBinImage;

function preload(){

  dustBinImage=loadImage("dustbingreen.png");
	
}

function setup() {
  createCanvas(1100, 700);
  
  edges=createEdgeSprites();

  dustBinObj=createSprite(820,465,200,200);
  dustBinObj.addImage(dustBinImage);
  dustBinObj.scale=1.1;


	engine = Engine.create();
	world = engine.world;

   bottomBin=new Bin(818,635,250,20);
   sideBin=new Bin(693,466,25,325);
   rightBin=new Bin(946,466,25,325);
   ground=new Ground(width/2,height-20,width,70);
   paper=new Paper(81,570,100,100);

   //dustBinObj=new dustBinImage(820,490,270,270);


   console.log("You can only put the trash once. If you miss it in the first go then you will have to restart to retry! Good luck!👍");
    Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  console.log(mouseX+","+mouseY);
  rectMode(CENTER);
  background("lightblue");

  ground.display();
  bottomBin.display();
  sideBin.display();
  rightBin.display();
  paper.display();
 // dustBinObj.display();
  


 // keyPressed();


 
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.myObjects, paper.myObjects.position,  {x:235, y: -265});
	}
}