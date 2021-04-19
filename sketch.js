
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground, bananaGroup, obstacleGroup, randomsome, randomN, randomM, tree1, tree2, tree3, tree4;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80, 315, 20, 20);
  
  monkey.addAnimation("monkey_running", monkey_running);
  
  monkey.scale = 0.1;
  
  
  
  ground = createSprite(400, 350, 1000, 10);
  
  ground.shapeColor = "brown";
  
  ground.velocityX = -4;
  
  
  bananaGroup = createGroup();
  
  obstacleGroup = createGroup();
  
  score = 0;
  

  
}


function draw() {
  
  background("forestgreen");
  
  fill("yellow");
  textSize(20);
  text("Score: " + score, 100, 30);
  
  ground.x = ground.width / 2;
  
  
  if (monkey.y > 313 && keyDown("space")) {
    monkey.velocityY = -15; 
  }

  monkey.velocityY += 0.8; 
  
  monkey.collide(ground);
  
  spawnBananas();
  
  spawnObstacles();
  
  score = Math.ceil(frameCount/frameRate());
  
  
  
  
  drawSprites();
  
}


function spawnBananas() {
  
  randomN = Math.round(random(120, 200));
  console.log("random: " + randomN);
  
  if (frameCount % 150 == 0) {
    banana = createSprite(400, randomN);
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = - 3;
    banana.lifetime = 200;  
    bananaGroup.add(banana);
  }
  
}


function spawnObstacles() {
  
  if (frameCount % 300 == 0) {
    obstacle = createSprite(400, 325);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
  
}


