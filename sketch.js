
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball
let ground,ground1,ground2;


function preload()
{
	
}

function setup() {
	createCanvas(1250,600);

  
  

  let ball_options = {
    isStatic:false,
    restitution: 0.3,
    friction:0,
    density:1.2

  }

  let ground_options = {
    isStatic:true
  }

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ball = Bodies.circle(100,50,30,ball_options)
  World.add(world,ball);

 

  ground = Bodies.rectangle(700,600,1450,60,ground_options);
  World.add(world,ground);

  ground1 = Bodies.rectangle(700,550,10,150,ground_options);
  World.add(world,ground1);

  ground2 = Bodies.rectangle(550,550,10,150,ground_options);
  World.add(world,ground2);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  push();
  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,30);
  pop();
  push();
  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x,ground.position.y,1450,60);
  rect(ground1.position.x,ground1.position.y,10,150);
  rect(ground2.position.x,ground2.position.y,10,150);
  pop();
  
  if(keyDown(UP_ARROW)){
    keyPressed();
  }
  

  drawSprites();
 
}

function keyPressed() {

  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:4,y:-25})
  }
  
}


