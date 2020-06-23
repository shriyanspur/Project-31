const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balls = [];
var plinkos = [];
var divs = [];

var engine, world;
var ground, ball;
//var dot1, div1;
var divHeight = 175;

function setup(){
    createCanvas(500, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(650, 600, 2000, 10)


    
    for (var k = 0; k <= width; k = k+80) {
        divs.push(new Division(k, height - divHeight/2, 10, divHeight));
    }


    for (var j = 40; j <=width; j=j+50) {
        plinkos.push(new Plinko(j, 90, 8));
    }

    for (var j = 15; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,160, 8));
    }

    for (var j = 40; j <=width; j=j+50) {
        plinkos.push(new Plinko(j, 230, 8));
    }

    for (var j = 15; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,300, 8));
    }
    
}

function draw(){
    background(56,44,44);
    Engine.update(engine);


    if (frameCount % 60 == 0) {
        balls.push(new Ball(random(width/2-10, width/2+10), 10, 10));
    }


    for (var j = 0; j < balls.length; j++) {
        balls[j].display();
    }

    
    for (var k = 0; k < divs.length; k++) {
        divs[k].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }
   

    ground.display();

}
