const Engine =Matter.Engine;
const World=Matter.World;

const Bodies=Matter.Bodies;

var engine,world,mybox;
//setup is used to create things
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  //connection between engine and world
  world=engine.world;
  var ground_options ={ isStatic:true}
  ground=Bodies.rectangle(200,380,400,50,ground_options);
  var ball_options ={isStatic:false,
  restitution:1.0}
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball);
  //to add my box in the world we have to write a command

  World.add(world,ground);
  console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER);
  //rect(200,200,50,50);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}