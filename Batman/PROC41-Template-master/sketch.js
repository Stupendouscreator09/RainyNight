const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Drops,umbrealla,groundObject;
var world

function setUp() {
createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
    world = engine.world;

    Drops =new Drops(400,0);
    Umbrella =new umbrella(200,50,70);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1600,
          height: 700,
          wireframes: false
        }
      });
  
      Engine.run(engine);
      Render.run(render);
      //Render.run(render);
    
  }
  
  
  function draw() {
    rectMode(CENTER);
    background(230);
   
    Drops.display();
    umbrella.display();
    groundObject.display();
    
   
    
    
   
  }
  
  
  

