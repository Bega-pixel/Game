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

       this.tiefigther = new Tiefigther(this.ctx ,680 , 300);
    
       this.lasershoot = new Lasershoot(this.ctx, 680 ,750);
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


         this.checkCollisions();

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

        this.tiefigther.draw();

       // this.lasershoot.draw();
        this.lasershoots.draw();
        
    }

    move(){
        this.xwing.move();
        this.lasershoot.move();
       // this.lasershoots.move();
    }

    /* enGame() {
        this.stop();
     } */
     checkCollisions() {
         const nocollidesLaser =  this.lasershoot.filter(lasershoot => 
             !this.tiefigther.collides(lasershoot));
             this.lasershoot = nocollidesLaser;
     }

}