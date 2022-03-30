var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
 pathImg = loadImage("path.png");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

 path = createSprite(200,200);
 path.addImage(pathImg);
 path.velocityY = 4;
 path.scale = 1.2;



//Criando menino que corre 
 boy = createSprite(200,200);
 boy.addAnimation(boyImg);



// Criando Boundary (Limite) esquerdo  
 leftBoundary = createSprite(0,0,100,800);
 leftBoundary.visible = false;


//Crie Boundary direito 
 rightBoundary = createSprite(400,0,100,800);
 rightBoundary.visible = false;

}


function draw() {
 background("black");

 path.velocityY = 4;

 boy.x = World.mouseX;

 edges= createEdgeSprites();

 boy.collide(edges[3]);
 boy.collide(leftBoundary);
 boy.collide(rightBoundary);


 if(path.y > height ){
  path.y = height/2;
}
 



 drawSprites();

 }




