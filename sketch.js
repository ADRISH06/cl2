const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;



    box1=new Box(200,200,50,150);   
    box2=new Box(30,50,70,140);
    box3=new Box(220,50,80,20)
    box4=new Box(100,300,60,10)


    ground=new Ground(200,392,400,15)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display()
}

