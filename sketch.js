const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");

}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:320 , y:225});
	m1 = new mango(900,150,8);
	m2 = new mango(950,120,10);
	m3 = new mango(1000,100,7);
	m4 = new mango(950,60,9);
	m5 = new mango(1050,60,6);
  m6 = new mango(1100,120,10);
  m7 = new mango(950,150,10);
  m8 = new mango(1220,120,10);
  m9 = new mango(1000,90,9);
  m10 = new mango(1200,100,15);
  m11 = new mango(1100,180,10);


	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
    chain.attach();
  
	  }

    rectMode(CENTER);
    background("white");
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    //console.log(rock);

    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,500);
	rock.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
 m10.display();
 m11.display();

	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);

	
	
  fill(0);
  textSize(20);
    text("Hit the mango to pluck them and eat them! The mangoes are yummy!", 280, 22);
	 text("Press space to get another chance!",285,45);
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}
