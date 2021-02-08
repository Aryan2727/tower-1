const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var box1, box2 , box3, box3, box4, box5, box6;
var ground1, ground2;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(330,350,50,50)
    block2 = new Block(385,350,50,50)
    block3 = new Block(440,350,50,50)
    block4 = new Block(495,350,50,50)
    block5 = new Block(360,300,50,50)
    block6 = new Block(415,300,50,50)
    block7 = new Block(470,300,50,50)
    block8 = new Block(390,250,50,50)
    block9 = new Block(445,250,50,50)
    block10 = new Block(410,200,50,50)

    box1 = new Block(740,250,50,50)
    box2 = new Block(800,250,50,50)
    box3 = new Block(860,250,50,50)
    box4 = new Block(770,200,50,50)
    box5 = new Block(830,200,50,50)
    box6 = new Block(800,150,50,50)

    ground1 = new Ground(500,570,1000,30)
    ground2 = new Ground(410,400,250,30)
    ground3 = new Ground(800,300,200,30)

}

function draw(){
    background(0);
    Engine.update(engine); 

    text("drag the hexagon and release it , to launch it towards blocks",200,100)

    ground1.display();
    ground2.display();
    ground3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
}
