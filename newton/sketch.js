const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;var backgroundImg,platform,chain;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    plat1 = new Ground(550, 100, 20, 20);
    plat2 = new Ground(600, 100, 20, 20);
    plat3 = new Ground(650, 100, 20, 20);

    bird = new Bird(650,100);
    chain=new Chain(plat3.body,bird.body)
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    

    ground.display();
  
    plat1.display();
    plat2.display();
    plat3.display()
    chain.display();



    bird.display();
    platform.display();
   
  
}
