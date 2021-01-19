
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var stoneObj;
var boy,boyIMG;

function preload()
{
	boyIMG=loadImage("boy.png!bw700")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,400);
	stoneObj = new Stone(600,200,50,50);
	boy=createSprite(100,200,10,10);
	boy.addImage(boyIMG);
	boy.scale=1;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

   stoneObj.display();
   ground.display();
   boy.display();
  
  drawSprites();
 
}



