var stageWidth = 600;
var stageHeight = 400;
var gameScore = 0;

Letters.init(600, 400, document.getElementById('letters-game'));

var foodBox = Letters.e("2D, Canvas, Color, Food")
  .attr({
    x: 150,
    y: 250,
    w: 15,
    h: 15
  })
  .color("red")
  .origin("center")
  .bind("EnterFrame", function(eventData) {
    this.rotation += 4;
  });

var playerBox = Letters.e("2D, Canvas, Color, Fourway, Collision")
  .attr({
    x: 50,
    y: 360,
    w: 50,
    h: 50
  })
  .color("black")
  .fourway(200)
  .bind("EnterFrame", function(eventData) {
    if(this.x < 0) {
      this.x = 0;
    }
    if(this.y < 0) {
      this.y = 0;
    }
    if(this.x > (stageWidth - this.w)) {
      this.x = stageWidth - this.w;
    }
    if(this.y > (stageHeight - this.h)) {
      this.y = stageHeight - this.h;
    }
  });

var scoreText = Letters.e('2D, DOM, Text')
  .attr({
    x: 10,
    y: 10
  })
  .textFont({
    size: '25px'
  });

scoreText.text(gameScore.toString());

playerBox.checkHits("Food").bind("HitOn", function(hitData) {
  foodBox.x = Math.random() * (stageWidth - foodBox.w);
  foodBox.y = Math.random() * (stageHeight - foodBox.h);
  gameScore += 1;
  scoreText.text(gameScore.toString());
});
