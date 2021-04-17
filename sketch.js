
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(690, 688);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,680,800,20);
	paper=new Paper(100,600,10);

	leftSide=new Dustbin(550,605,20,100);
	bottom=new Dustbin(610,660,100,20);
	rightSide=new Dustbin(670,605,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0,255,255);
  ground.display();

  paper.display();

  leftSide.display();
  bottom.display();
  rightSide.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
	}
}



