class Xwing {

    constructor(ctx, x ,y ) {
        this.ctx = ctx;
        this.x = x;
        this.vx = 0;
        this.maxX = 1279;
        this.minX = -15;
        this.y = y;
        this.vy = 0;
       

        this.sprite = new Image();
        this.sprite.src = './img/RogueSquadron/X-Wing.png';
        this.sprite.isReady = false;
      
        this.sprite.horizontalFrames = 3;
        this.sprite.verticalFrames = 1;
        this.sprite.horizontalFramesIndex = 1;
        this.sprite.verticalFramesIndex = 0;

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

        this.canFire = true;
        this.lasers = [];

        this.drawCount = 0;

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
                            
                            
                            case KEY_FIRE:
                                this.canFire = state;   
                                    this.xwing.fireLaser( () => {
                                        if (this.lasers.length === 0){
                                            this.lasers.push(new laser(this.x, this.y, true))
                                        }  
                                    });
                                                           
                                 break;

            }
        }

        clear() {
            this.lasers = this.lasers.filter(laser => laser.x <= this.ctx.canvas.width)
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
            this.lasers.forEach(laser => laser.draw());
            this.drawCount++;
           this.animate();
        }
    }

    move() {
       
        
        this.lasers.forEach(laser => laser.move());


        if (this.movement.right) {
            this.vx = SPEED;
         //   this.sprite.horizontalFramesIndex = 2;
        }else if (this.movement.left) {
            this.vx = -SPEED;
         //   this.sprite.horizontalFramesIndex = 0;
        }else{
            this.vx = 0;
        //    this.sprite.horizontalFramesIndex = 1;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x >= this.maxX) {
            this.x = this.maxX;
        }else if (this.x <= this.minX) {
            this.x = this.minX;
        }
    }

    animate(){
        if (this.movement.right) {     
            this.sprite.horizontalFramesIndex = 2;
        }else if (this.movement.left) {
            this.sprite.horizontalFramesIndex = 0;
        }else{
            this.sprite.horizontalFramesIndex = 1;
        }
    }


    }
