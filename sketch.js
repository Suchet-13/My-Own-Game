    

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform,stand1,stand2;
var bird, slingshot,gameState="onsling";


function preload() {
    backgroundImg = loadImage("Capture.JPG");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    stand1 = new Stand(810,400,100,10);
    stand2 = new Stand(700,200,200,10);

    //box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    pig1 = new Pig(700, 100);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    pig3 = new Pig(760, 100);

    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    if(bird.body.collide=pig1){
        pig1.visible=false;
        
    }

    if(gameState==="launched"){
        stroke("yellow")
        strokeWeight(3)
        textSize(24)
       // text("Drag the mouse and release it to launch the box at the tower",150,100);
        text("Press spacebar to reset the box to the slingshot",500,350);

    }
    if(pig1.visible===false && pig3.visible===false){
        stroke("red");
        strokeWeight(4)
        textSize(24);
        text("YAY!, refresh the page to play again",175,150);
    }

    //strokeWeight(4);
   // box1.display();
   // box2.display();
   stand1.display();
   stand2.display();

    ground.display();
    pig1.display();
    //log1.display();

   // box3.display();
    //box4.display();
    pig3.display();
   //log3.display();

    //box5.display();
    //log4.display();
    //log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();   
    
    


}

function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
        gameState="onsling"
    }
}