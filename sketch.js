const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground,ball;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world
  var groundOptions={
  isStatic:true
  }
 ground= Bodies.rectangle(0,380,800,20,groundOptions);
  World.add( world,ground );   
  
  
  var ballOptions={
    restitution:1
    }
   ball= Bodies.circle(300,100,20,ballOptions);
    World.add( world,ball);                             
  
}



function draw() {
  background(255,255,255);  

  rect(ground.position.x,ground.position.y,800,20);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,50,50);
   
}