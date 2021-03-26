var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, grape_img, pine_img, orange_img, watermelon_img;

function preload(){
  track = loadImage("images/track.jpg");
  grape_img = loadImage("images/GRAPES.png");
  pine_img = loadImage("images/pineapple.png");
  orange_img = loadImage("images/OO.png");
  watermelon_img = loadImage("images/watermelon.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
