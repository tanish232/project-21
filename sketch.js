var bullet, speed, weight;
var thickness,wall;

  function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet= createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor="white";
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";

}

function draw() {
  background("blue");  

  if(hasCollided(bullet,wall)===true){
    bullet.velocityX=0;
    var damage= 0.5 * weight *speed*speed/thickness*thickness*thickness
    console.log(wall.damage);
    if(damage< 10){
    wall.shapeColor="green";
    }
    if(damage> 10){
    wall.shapeColor="red";
    }
  }
  drawSprites();
  
}

function hasCollided(lbullet,lwall){
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
  return true;
  }
  }
  











