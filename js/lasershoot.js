class Lasershoot {

  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.vx = SPEED;
    this.y = y;
    this.vy = SPEED;
    this.width = 0;
    this.height = 0;

    this.sprite = new Image();
    //this.sprite.src = './img/RogueSquadron/lasershoot.png';
    this.sprite.src = './img/RogueSquadron/Lasershoot1.png';
    this.sprite.horizontalFramesIndex = 0;
    this.sprite.verticalFramesIndex = 0;
    this.sprite.horizontalFrames = 1;
    this.sprite.verticalFrames = 1;
    this.sprite.onload = () => {
      //console.log('loaded');
      this.isReady = true;
      this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
      this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames);
      this.width = this.sprite.frameWidth;
      this.height = this.sprite.frameHeight;
    }
    this.drawCount = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.sprite,
      this.sprite.horizontalFramesIndex * this.sprite.frameWidth,
      this.sprite.verticalFramesIndex * this.sprite.frameHeight,
      this.sprite.frameWidth,
      this.sprite.frameHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.drawCount++;
  }

  move() {
    this.y -= this.vy;
  }

  collides(element) {
    return this.x < element.x + element.width &&
      this.x + this.width > element.x &&
      this.y < element.y + element.height &&
      this.y + this.height > element.y;
  }


}
