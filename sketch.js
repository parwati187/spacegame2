
var bullet, spaceship,enemyship;
var bulletImage,enemyImage,spaceshipImage;
var bg,backgroundImage;

var enemiesGroup,bulletGroup;
 
var score = 0;
var time = 10;

function preload(){
  backgroundImage=loadImage("spacebg.png")
  enemyImage=loadImage("enemyship.png");
  spaceshipImage=loadImage("spaceship.png");
  bulletImage=loadImage("bullet.png");
}

function setup() {
  createCanvas(600,600);

  bg=createSprite(200,200,800,800);
  bg.addImage("background1",backgroundImage);
  bg.x=bg.width/2;
  bg.velocityY=4;
  bg.scale=5;
   
  spaceship = createSprite(200,380,5,5);
  spaceship.addImage("spaceship",spaceshipImage);
  spaceship.scale=0.2;
     
  enemiesGroup = new Group();
  bulletGroup = new Group();
 }

function draw() 
{
  background("white");
  
  createEdgeSprites();
  
    spaceship.x= World.mouseX;
  
  if (bg.y > 500) {
    bg.y = bg.height/2;
  }
  if(keyDown("space")){
    Bullets();
  }
  if(World.frameCount%50 === 0)
  {
    enemyship = createSprite(Math.round(random(50,350)),0,20,20);
    enemyship.addImage("enemyship",enemyImage);
    enemyship.velocityY = 5;
    enemyship.scale = 0.5;
    enemyship.setCollider("rectangle",0,0,200,200);
    enemiesGroup.add(enemyship);
    
  }
   
  for(var i=0;i<enemiesGroup.length;i++){
    
    if(bulletGroup.isTouching(enemiesGroup)){
     
      enemiesGroup.get(i).destroy();
      score++;
    }
     
  }
  drawSprites();
  fill("white");
  textSize(25);
  text("SCORE : "+score,250,50);
}

function Bullets()
{
  
    bullet = createSprite(200,370,0,0);
    bullet.addImage("bullet",bulletImage);
    bullet.scale=0.05;
    bullet.x=spaceship.x;
    bullet.velocityY=-3;
    bullet.setCollider("rectangle",0,0,200,200);
    bullet.depth=spaceship.depth;
    spaceship.depth = spaceship.depth + 1;
    
    
    bulletGroup.add(bullet);
   
}
