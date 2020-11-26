class Xwing {

    constructor(ctx, x ,y ) {
        this.ctx = ctx;
        this.x = x;
        this.vx = 0;
        this.maxX = 1279;
        this.minX = -15;
        this.y = y;
        this.vy = 0;
       // this.drawCount = 0;
        
        

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

        this.movement = {
            left: false,
            right: false
        }
    }

        onKeyEvent(event){
            const state = event.type === 'keydown';
            switch (event.keyCode) {
                    case KEY_RIGHT:
                        this.movement.right = state;
                        break;
                        case KEY_LEFT:
                            this.movement.left = state;
                            break;    
            }
        }


    draw() {
        if(this.sprite.isReady) {
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
            //this.drawCount++;

        }
    }

    move() {

        if (this.movement.right) {
            this.vx = SPEED;
        }else if (this.movement.left) {
            this.vx = -SPEED;
        }else{
            this.vx = 0;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x >= this.maxX) {
            this.x = this.maxX;
        }else if (this.x <= this.minX) {
            this.x = this.minX;
        }
    }

    

}