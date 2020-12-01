class Game {
    

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = 1360;
        this.canvas.height = 940;
        this.ctx = this.canvas.getContext('2d');

        this.fps = 1000 /60
        this.drawIntervalId = undefined;

        this.background = new Background(this.ctx);
        //
       this.xwing = new Xwing (this.ctx, 680 ,850);

      // this.tiefigther = new Tiefigther(this.ctx ,680 , 300);
    
       this.lasershoot = new Lasershoot(this.ctx, 680 ,750);

       this.tiefigthers = [
        new Tiefigther(this.ctx ,10 , 10),
        new Tiefigther(this.ctx ,110 , 10),
        new Tiefigther(this.ctx ,210 , 10),
        new Tiefigther(this.ctx ,310 , 10),
        new Tiefigther(this.ctx ,410 , 10),
        new Tiefigther(this.ctx ,510 , 10),
        new Tiefigther(this.ctx ,610 , 10),
        new Tiefigther(this.ctx ,710 , 10),
        new Tiefigther(this.ctx ,810 , 10),
        new Tiefigther(this.ctx ,910 , 10),
        new Tiefigther(this.ctx ,1010 , 10),
        new Tiefigther(this.ctx ,1110 , 10),
        new Tiefigther(this.ctx ,10 , 110),
        new Tiefigther(this.ctx ,110 , 110),
        new Tiefigther(this.ctx ,210 , 110),
        new Tiefigther(this.ctx ,310 , 110),
        new Tiefigther(this.ctx ,410 , 110),
        new Tiefigther(this.ctx ,510 , 110),
        new Tiefigther(this.ctx ,610 , 110),
        new Tiefigther(this.ctx ,710 , 110),
        new Tiefigther(this.ctx ,810 , 110),
        new Tiefigther(this.ctx ,910 , 110),
        new Tiefigther(this.ctx ,1010 , 110),
        new Tiefigther(this.ctx ,1110 , 110),
       ];
    }
    
   
    onKeyEvent(event) {
        this.xwing.onKeyEvent(event);
    }
     

    start () {
        if(!this.drawIntervalId) {
         this.drawIntervalId = setInterval(() => {
         this.clear();
         this.move();
         this.draw();


        // this.checkCollisions();

       }, this.fps);
    }
 }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    stop() {
        clearInterval(this.drawIntervalId);
        this.drawIntervalId = undefined;
}

    draw() {
        this.background.draw();

        this.xwing.draw();

       // this.tiefigther.draw();
       // this.lasershoot.draw();
       //this.lasershoots.draw();

        this.tiefigthers.forEach(tiefigther => tiefigther.draw());
        
    }

    move(){
        this.xwing.move();
        this.lasershoot.move();
       // this.lasershoots.move();
      // this.tiefigthers.move();
       this.tiefigthers.forEach(tiefigther => tiefigther.move());
    }

    /* enGame() {
        this.stop();
     } */
     checkCollisions() {
         const noCollidesLaser =  this.tiefigthers.filter(tiefigther => 
             !this.lasershoot.collides(tiefigther));
             this.tiefigthers = noCollidesLaser;
     }

}