var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount,gameState;
var blastImg


var car1,car2,car1Img,car2Img,trackImg
var cars=[]
var allPlayers;

var coins, coinImg
var fuel, fuelImg
var lifeImg
var  obstacle1Image,obstacle2Image
var obscacles


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img= loadImage("assets/car1.png")
  car2Img= loadImage("assets/car2.png")
  trackImg= loadImage("assets/track.jpg")

  coinImg = loadImage("assets/goldCoin.png")
  fuelImg = loadImage("assets/fuel.png")
  obstacle1Image = loadImage("assets/obstacle1.png")
  obstacle2Image = loadImage("assets/obstacle2.png")

  lifeImg= loadImage("assets/life.png")

  blastImg = loadImage("assets/blast.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
}

function draw() {
  background(backgroundImage);

  if(playerCount == 2){
    game.updateState(1)
  }

  if(gameState == 1){
    game.play();
  }
  console.log(gameState)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
