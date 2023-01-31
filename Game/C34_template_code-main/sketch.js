var backgroundImage
var birdImage;
var bird
var coinImage;
var pipeBottomImage;
var pipeTopImage;
var pipeBottom;
var pipeTop;
var pipeTopGroup;
var pipeBottomGroup;

function preload(){
    backgroundImage = loadImage("Images/background1.png");
    coinImage = loadImage("Images/coin.png");
    pipeBottomImage = loadImage("Images/pipeBottom.png");
    pipeTopImage = loadImage("Images/pipeTop.png");
    birdImage = loadAnimation("Images/bird1.png","Images/bird2.png","Images/bird3.png","Images/bird4.png");

}
function setup(){
    createCanvas(1400,550);
    bird = createSprite(100,220,100,100);
    bird.addAnimation("bird", birdImage);
    bird.scale= 0.5;
    pipeTopGroup = new Group()
    pipeBottomGroup = new Group()
}
function draw(){
    background(backgroundImage);
    spawningPipesTop();
    spawningPipesBottom();
    collidingBird();
    
    if(keyIsDown(UP_ARROW)){
        bird.position.y = bird.position.y-10;
       
    }
     if(keyIsDown(DOWN_ARROW)){
        bird.position.y = bird.position.y+10;
        
    }


    drawSprites()
}

function spawningPipesTop(){
    if(frameCount%150 == 0){
        position = [10,30,50,70]
        pipeTop = createSprite(1400, random(position),100,100);
        pipeTop.velocityX = -4
        pipeTop.addImage(pipeTopImage)
        pipeTopGroup.add(pipeTop);
    }

}
function spawningPipesBottom(){
    if(frameCount%200 == 0){
        position = [490, 470, 450, 430 ]
        pipeBottom = createSprite(1400, random(position),100,100);
        pipeBottom.velocityX = -4;
        pipeBottom.addImage(pipeBottomImage)
        pipeBottomGroup.add(pipeBottom);
    }
}

function collidingBird(){
    if(bird.isTouching(pipeTopGroup) || bird.isTouching(pipeBottomGroup)){
        pipeTopGroup.setVelocityXEach(0)
        pipeBottomGroup.setVelocityXEach(0)
        bird.velocityY = 0
        
            
        
    }
}


