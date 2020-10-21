const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var grounds;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,100,50,50);
    box2 = new Box(400,150,50,50);
    box3 = new Box(400,200,50,50);
    box4 = new Box(400,250,50,50);
    box5 = new Box(400,300,50,50);
    box6 = new Box(400,350,50,50);

    bo1 = new Box(350,100,50,50);
    bo2 = new Box(350,150,50,50);
    bo3 = new Box(350,200,50,50);
    bo4 = new Box(350,250,50,50);
    bo5 = new Box(350,300,50,50);
    bo6 = new Box(350,350,50,50);

    b1 = new Box(300,100,50,50);
    b2 = new Box(300,150,50,50);
    b3 = new Box(300,200,50,50);
    b4 = new Box(300,250,50,50);
    b5 = new Box(300,300,50,50);
    b6 = new Box(300,350,50,50);

    balll = new ball(550,320,70)

    rope = new suspender({x:656,y:33},balll.body,350)

    grounds = new Ground(500,471,1000,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    bo1.display();
    bo2.display();
    bo3.display();
    bo4.display();
    bo5.display();
    bo6.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    balll.display()
    grounds.display();
    rope.display()
    text("MouseX: "+mouseX+"MouseY: "+ mouseY,mouseX,mouseY);
}

function mouseDragged(){
    Matter.Body.setPosition(balll.body,{x:mouseX,y:mouseY})
}