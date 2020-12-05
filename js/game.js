class Game {

  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 1460;
    this.canvas.height = 985;
    this.ctx = this.canvas.getContext('2d');

    this.fps = 1000 / 60
    this.drawIntervalId = undefined;

    this.background = new Background(this.ctx);

    this.xwing = new Xwing(this.ctx, 680, 875);

    this.vadertie = new Vadertie(this.ctx, 10, -880);

    //this.lasershoot = new Lasershoot(this.ctx, 680, 750);

    this.tiefigthers = [
      new Tiefigther(this.ctx, 10, 10),
      new Tiefigther(this.ctx, 110, 10),
      new Tiefigther(this.ctx, 210, 10),
      new Tiefigther(this.ctx, 310, 10),
      new Tiefigther(this.ctx, 410, 10),
      new Tiefigther(this.ctx, 510, 10),
      new Tiefigther(this.ctx, 610, 10),
      new Tiefigther(this.ctx, 710, 10),
      new Tiefigther(this.ctx, 810, 10),
      new Tiefigther(this.ctx, 910, 10),
      new Tiefigther(this.ctx, 1010, 10),
      new Tiefigther(this.ctx, 1110, 10),
      new Tiefigther(this.ctx, 1210, 10),
      new Tiefigther(this.ctx, 1310, 10),

      new Tiefigther(this.ctx, 10, 80),
      new Tiefigther(this.ctx, 110, 80),
      new Tiefigther(this.ctx, 210, 80),
      new Tiefigther(this.ctx, 310, 80),
      new Tiefigther(this.ctx, 410, 80),
      new Tiefigther(this.ctx, 510, 80),
      new Tiefigther(this.ctx, 610, 80),
      new Tiefigther(this.ctx, 710, 80),
      new Tiefigther(this.ctx, 810, 80),
      new Tiefigther(this.ctx, 910, 80),
      new Tiefigther(this.ctx, 1010, 80),
      new Tiefigther(this.ctx, 1110, 80),
      new Tiefigther(this.ctx, 1210, 80),
      new Tiefigther(this.ctx, 1310, 80),

      new Tiefigther(this.ctx, 10, 150),
      new Tiefigther(this.ctx, 110, 150),
      new Tiefigther(this.ctx, 210, 150),
      new Tiefigther(this.ctx, 310, 150),
      new Tiefigther(this.ctx, 410, 150),
      new Tiefigther(this.ctx, 510, 150),
      new Tiefigther(this.ctx, 610, 150),
      new Tiefigther(this.ctx, 710, 150),
      new Tiefigther(this.ctx, 810, 150),
      new Tiefigther(this.ctx, 910, 150),
      new Tiefigther(this.ctx, 1010, 150),
      new Tiefigther(this.ctx, 1110, 150),
      new Tiefigther(this.ctx, 1210, 150),
      new Tiefigther(this.ctx, 1310, 150)
    ];

    this.canFire = true;
    this.lasershootsties = [];

    this.canFire = true;
    this.lasershoots = [];
  }


  onKeyEvent(event) {
    this.xwing.onKeyEvent(event);
  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
        this.checkCollisions();
        this.checkCollisions1();

      }, this.fps);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //this.lasershoots = this.lasershoots.filter(lasershoot => (lasershoot.y + lasershoot.height) <= 0);
    //this.lasershootsties = this.lasershootsties.filter(lasershoottie => (lasershoottie.y + lasershoot.height) > 985);
    //this.tiefigthers = this.tiefigthers.filter(tiefigther => (tiefigther.y + tiefigther.height) > 985);
  }

  stop() {
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
  }

  draw() {
    this.background.draw();

    this.xwing.draw();

    this.vadertie.draw();

    // this.tiefigther.draw();
    // this.lasershoot.draw();
    //this.lasershoottie.draw();
    this.lasershoots.map(laser => laser.draw());
    this.tiefigthers.forEach(tiefigther => tiefigther.draw());
    this.lasershootsties.map(laser => laser.draw());

  }

  move() {
    this.xwing.move();
    this.lasershoots.map(laser => laser.move())
    // this.lasershoot.move();
    // this.lasershoottie.move();
    this.vadertie.move();
    this.tiefigthers.forEach(tiefigther => tiefigther.move());
    this.lasershootsties.map(laser => laser.move())
  }
  /*
    tiefigthersShootLaser(){
    for(let i = 0 ; i < column; i++){
        for(let j = 0 ; j < row; j++){
          let random_i = Math.floor.(Math.random()*column);
          let random_j = Math.floor.(Math.random()*row);
          if(this.tiefigthers[random_i][random_j].isAlive){
            this.tiefigthers[random_i][random_j].shootLaser();
          }
        }
    }
  }
  */

  /* enGame() {
      this.stop();
   } */
  checkCollisions() {
    const noCollidesLaser = this.tiefigthers.filter(tiefigther =>
      !this.xwing.collides(tiefigther));
    this.tiefigthers = noCollidesLaser;

    /*
     for (let k =0 ; k< this.lasershoots.length; k++) {
       if(this.vadertie.collides(lasershoot[k])){
           this.vadertie.clear(lasershoot[k]);
       }
     }*/

    for (let i = 0; i < this.xwing.lasershoots.length; i++) {

      for (let j = 0; j < this.tiefigthers.length; j++) {
        if (this.xwing.lasershoots[i].collides(this.tiefigthers[j])) {

          this.xwing.lasershoots.splice([i], 1);
          this.tiefigthers.splice([j], 1);
        }
      }
    }
  }

  checkCollisions1() {
    this.lasershoot = new Lasershoot(this.ctx, 680, 750);
    /*

     const noCollidesLaser = this.tiefigthers.filter(tiefigther =>
      !this.xwing.collides(tiefigther));*/

    /*
     if(this.lasershoot.collides(this.vadertie) === 3 ){
    this.vadertie.clear();
     }*/
  }

}
