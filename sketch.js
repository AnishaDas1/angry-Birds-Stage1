const Engine=Matter.Engine;//engine is like universe
const World=Matter.World;//world is like earth
const Bodies=Matter.Bodies;//bodies are living and non living object on the earth

var engine,world;//creatings variables
var ground,box1,box2,box3,box4,box5,log1,log2,log3,log4,pig1,pig2,bird;





function setup() {
  createCanvas(1200,400);
engine=Engine.create();//in the variable engine we are creating a physics engine
world=engine.world;//inside engine we are creating a world
ground = new Ground(600,height,1200,20);
box1 = new Box(700,320,70,70);
pig1 = new Pig(810,350);
box2 = new Box(920,320,70,70);
log1 = new Log(810,260,300,90);
box3 = new Box(700,240,70,70);
pig2 = new Pig(810,220);
box4 = new Box(920,240,70,70);
log2 = new Log(810,180,300,90);
log3 = new Log(760,120,150,25.71);
box5 = new Box(810,160,70,70);
log4 = new Log(870,120,150,-25.71);
bird = new Bird(100,100);


}

function draw() {
  background("lightblue");  

  Engine.update(engine);

  ground.display();
  box1.display();
  pig1.display();
  box2.display();
  log1.display();
  box3.display();
  pig2.display();
  box4.display();
  log2.display();
  log3.display();
  box5.display();
  log4.display();
  bird.display();
  


   

  
}