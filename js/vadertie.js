class Vadertie {

  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.vx = 0;
    this.maxX = 1230;
    this.minX = 30;
    this.y = y;
    this.vy = 0;
    this.dirX = 1;
    this.dirY = 0;

    this.sprite = new Image();
    this.sprite.src = './img/RogueSquadron/Vadertie.sprite.png';
    this.sprite.isReady = false;

    this.sprite.horizontalFrames = 1;
    this.sprite.verticalFrames = 1;
    this.sprite.horizontalFramesIndex = 0;
    this.sprite.verticalFramesIndex = 0;

    this.sprite.onload = () => {
      //console.log('loaded');
      this.sprite.isReady = true;
      this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
      this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames);
      this.width = this.sprite.frameWidth;
      this.height = this.sprite.frameHeight;

    }
  }

  draw() {
    if (this.sprite.isReady) {
      //console.log();
      this.ctx.drawImage(
        this.sprite,
        this.sprite.frameWidth * this.sprite.horizontalFramesIndex,
        this.sprite.frameHeight * this.sprite.verticalFramesIndex,
        this.sprite.frameWidth,
        this.sprite.frameHeight,
        this.x,
        this.y,
        this.width,
        this.height

      );
    }
  }
  move() {
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY;

    if (this.x >= this.maxX) {
      this.x = this.maxX;
    } else if (this.x <= this.minX) {
      this.x = this.minX;
    }

    if (this.x === this.maxX) {
      this.dirX *= -2;
      this.y += 60;
      //this.sprite.horizontalFramesIndex = 0;

    } else if (this.x === this.minX) {
      this.dirX += 4;
      this.y += 60;
      //this.sprite.horizontalFramesIndex = 2;
    }

  }

  collides(element) {
    return this.x < element.x + element.width &&
      this.x + this.width > element.x &&
      this.y < element.y + element.height &&
      this.y + this.height > element.y;
  }

}
