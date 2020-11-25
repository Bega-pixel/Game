class Xwing {

    constructor(ctx, x ,y ) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.drawCount = 0;
        

        this.sprite = new Image();
        this.sprite.src = './img/RogueSquadron/X-Wing.png';
        this.sprite.isReady = false;
      
        this.sprite.horizontalFrames = 3;
        this.sprite.verticalFrames = 1;
        this.sprite.horizontalFramesIndex = 1;
        this.sprite.verticalFramesIndex = 0;
/*
       this.sprite.horizontalFrames = 1;
        this.sprite.verticalFrames = 1;
        this.sprite.horizontalFramesIndex = 0;
        this.sprite.verticalFramesIndex = 0;
*/
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
        if(this.sprite.isReady) {
            //console.log();
            this.ctx.drawImage(
                this.sprite,
                this.sprite.frameWidth * this.sprite.horizontalFrameIndex,
                this.sprite.frameHeight * this.sprite.verticalFrameIndex,
                this.sprite.frameWidth,
                this.sprite.frameHeight,
                this.x,
                this.y,
                this.width,
                this.height


            );
            this.drawCount++;
        }
    }

}