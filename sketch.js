const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1, pig1;
var img,platform;
var slingshot;
var gcolor;

function preload() {
    img = loadImage("bin1.png");
    img2= loadImage("bin2.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,15,0);
   
    side1 = new SideEdge(874,330,130, radians(-15));
    side2 = new SideEdge(1020,330,130,radians( 15));
   
    waste = new Waste(200,125);
   
    launcher = new Launcher(waste.body, {x:200,y:110});
    gcolor = color(165,45,45);
    lcolor = color (200,200,150)
}

function draw(){
    background(255); 
    image(img2, 839, 220, 220, 50);
    Engine.update(engine);
    
    ground.display(gcolor);
    side1.display();
    side2.display();
  
  
    waste.display();
     
    launcher.display();
    image(img, 850, 245, 200, 150);
}

function mouseDragged() {
    Matter.Body.setPosition(waste.body, {x: mouseX, y: mouseY});
}


function mouseReleased() {
launcher.fly();
}