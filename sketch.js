var name;
var input;
var button;
var buttonimg;
var gameState = 0;
var level1;
var player;
var b_virus_img;
var virus_img;
var v_group, bv_group, s_group;
var score = 0;
var edges;
var background_img

function preload(){
  buttonimg = loadImage("PlayButton.png");
  b_virus_img = loadImage("Mega Covid.png");
  virus_img = loadImage("Small Covid.png");
  background_img = loadImage("Lvl 1 terrain.png");
}
function setup() {
  createCanvas(1000,600);
  input = createInput("Player Name");
  input.position(425,200);
  button = createSprite(500,300,20,20);
  button.addImage(buttonimg); 
  button.scale = 0.5;
  textSize(40);
  textStyle(BOLD);
  textFont("Impact");
  text("COVID-19 Simulator",325,100);
  player = createSprite(400,150,40,40);
  player.visible = false; 
  v_group = new Group();
  bv_group = new Group();
  s_group = new Group();
}

function draw() {
  background("blue");  
  edges = createEdgeSprites();
  name = input.value();
  if(mousePressedOver(button)){
    gameState = 1;
    input.hide();
    button.destroy();
    clear();
  }
  if(gameState === 0){
  textSize(40);
  textStyle(BOLD);
  textFont("Impact");
  text("COVID-19 Simulator",325,100);
  }
  if(gameState ===1){
    player.visible = true; 
    level1 = new Level1();
    level1.display();
    //background("red");
    background("background_img");
    textSize(20);
    text("Score: " + score, 920,50);


    
  }
  
  drawSprites();
 
  
}