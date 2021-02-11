const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pin1;

function preload(){
  backgroundImg = loadImage("sprites/bg2.jpg");
}

function setup(){
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,695,1200,20);
  ground2 = new Ground(600,200,400,20);
  

  pin1 = new Pin(600,190,60,140);
  pin2 = new Pin(660,190,60,140);
  pin3 = new Pin(540,190,60,140);
  pin4 = new Pin(480,190,60,140);
  pin5 = new Pin(720,190,60,140);


  ball = new Ball(600,690,80,80);
}


function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    ground2.visible = false;

    keyPressed();
    
   

    pin1.display();
    pin2.display();
    pin3.display();
    pin4.display();
    pin5.display();

    ball.display();

    
}


function keyPressed(){
  if(keyCode == 38){
      Matter.setVelocity(ball.body,{})
  }
}