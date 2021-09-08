var canvas;
var music;
var b1 ,b2, b3, b4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1=createSprite(0,580,360,30);
b1.shapeColor=rgb(0,0,255);

b2=createSprite(295,580,200,30);
b2.shapeColor=rgb(255,128,0);

b3=createSprite(515,580,200,30);
b3.shapeColor=rgb(255,0,0);

b4=createSprite(740,580,220,30);
b4.shapeColor=rgb(0,255,255);

    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,30);
    ball.shapeColor=rgb(50,4,200);
    ball.velocityX=8;
    ball.velocityY=10;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    //create edgeSprite
if(b1.isTouching(ball) && (ball.bounceOff(b1))){
    ball.shapeColor=rgb(0,0,255);
    music.play()
}

if(b2.isTouching(ball)){
    ball.shapeColor=rgb(255,128,0);
    music.stop();
    ball.velocityX=0;
    ball.velocityY=0;
}

if(b3.isTouching(ball) && (ball.bounceOff(b3))){
    ball.shapeColor=rgb(255,0,0);
    
}

if(b4.isTouching(ball) && (ball.bounceOff(b4))){
    ball.shapeColor=rgb(0,255,255);
    
}

drawSprites();

    //add condition to check if box touching surface and make it box
}
