class Game {

  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 1760;
    this.canvas.height = 975;
    this.ctx = this.canvas.getContext('2d');
    this.fps = 1000 / 60
    this.drawIntervalId = undefined;

    this.background = new Background(this.ctx);
    this.xwing = new Xwing(this.ctx, 680, 875);

    this.vaderties = [
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690),
      new Vadertie(this.ctx, 10, -690)

    ];

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
      new Tiefigther(this.ctx, 1410, 10),
      new Tiefigther(this.ctx, 1510, 10),
      new Tiefigther(this.ctx, 1610, 10),
      new Tiefigther(this.ctx, 1710, 10),

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
      new Tiefigther(this.ctx, 1410, 80),
      new Tiefigther(this.ctx, 1510, 80),
      new Tiefigther(this.ctx, 1610, 80),
      new Tiefigther(this.ctx, 1710, 80),

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
      new Tiefigther(this.ctx, 1310, 150),
      new Tiefigther(this.ctx, 1410, 150),
      new Tiefigther(this.ctx, 1510, 150),
      new Tiefigther(this.ctx, 1610, 150),
      new Tiefigther(this.ctx, 1710, 150)
    ];

    this.canFire = true;
    this.lasershootsties = [];

    this.canFire = true;
    this.lasershoots = [];
/*
    this.textAnswer = {
      over:false,
      title: '',
      subtitle: ''
      fillStyle: 'red',
    };
    this.gameState = {
         state:'on'
    };*/
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
       // this.dText();
       // this.gameStatus();

      }, this.fps);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //this.lasershoots = this.lasershoots.filter(lasershoot => (lasershoot.y + lasershoot.height) <= 0);
    //this.tiefigthers = this.tiefigthers.filter(tiefigther => (tiefigther.y + tiefigther.height) > 985);
    this.xwing.clear();

    for (let m = 0; m < this.xwing.lasershoots.length; m++) {
      if(m.y <=0){
      this.lasershoots.splice([m], 1);
      }
    }
  
  }

  stop() {
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
  }

  draw() {
    this.background.draw();
    this.xwing.draw();
   
    this.lasershoots.map(laser => laser.draw());
    this.vaderties.forEach(vadertie => vadertie.draw());
    this.tiefigthers.forEach(tiefigther => tiefigther.draw());
    this.lasershootsties.map(laser => laser.draw());
    

  }

  move() {
    this.xwing.move();
    this.lasershoots.map(laser => laser.move())
    this.vaderties.forEach(vadertie => vadertie.move());
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

   enGame() {
      this.stop();
   } 

    stop(){
      clearInterval(this.setIntervalId);
      this.drawIntervalId = undefined;
    }
   

  checkCollisions() {
   
    for (let c = 0; c < this.tiefigthers.length; c++) {
      if (this.xwing.collides(this.tiefigthers[c])) {
        this.tiefigthers.splice([c], 1);
      }
    }

    for (let t = 0; t < this.vaderties.length; t++) {
      if (this.xwing.collides(this.vaderties[t])) {
        this.vaderties.splice([t], 1);
      }
    }


    for (let i = 0; i < this.xwing.lasershoots.length; i++) {

      for (let j = 0; j < this.tiefigthers.length; j++) {
        if (this.xwing.lasershoots[i].collides(this.tiefigthers[j])) {

          this.xwing.lasershoots.splice([i], 1);
          this.tiefigthers.splice([j], 1);
        }
      }
    }

    
    for (let k = 0; k < this.xwing.lasershoots.length; k++) {

      for (let l = 0; l < this.vaderties.length; l++) {
        if (this.xwing.lasershoots[k].collides(this.vaderties[l])) {

          this.xwing.lasershoots.splice([k], 1);
          this.vaderties.splice([l], 1);
        }
      }
    }


  }
/*
  gameStatus(){
    if(this.gameState.state === 'playing' && this. tiefigthers.length === 0){
      state = 'victory';
      this.textAnswer.title = 'You Win and will warp to met with the Rebels';
      this.textAnswer.subtitle = 'Press R to continue';
      this.textAnswer.count = 0;
    }
    if(this.textAnswer.count >=0){
      this.textAnswer.contador++;
    }
  }

  dText(){
    if(this.textAnswer.count === -1 ) return;
    const alpha = this.textAnswer.count / 50.0;
    if(alpha>1){
      for(let i in this.tiefigthers){
            delete this.tiefigthers[i];
      }
    }
    this.ctx.save();
    this.ctx.globalAlpha = alpha;
    if(this.gameState.state === 'lost'){
      this.ctx.fillText(this.textAnswer.title, 120, 190);
      this.ctx.fillstyle = 'white';
      this.ctx.font = 'bold 40pt Arial';

      this.ctx.fillText(this.textAnswer.subtitle, 120, 190);
      this.ctx.fillstyle = 'white';
      this.ctx.font = 'bold 40pt Arial';
    }
    if(this.gameState.state === 'victory'){
      this.ctx.fillText(this.textAnswer.title, 120, 190);
      this.ctx.fillstyle = 'white';
      this.ctx.font = 'bold 40pt Arial';
      this.ctx.fillText(this.textAnswer.subtitle, 120, 190);
      this.ctx.fillstyle = 'white';
      this.ctx.font = 'bold 40pt Arial';
    }
  }


  shootsAdd(tiefigther){
  return {
  x: tiefigther.x,
  y: tiefigther.y,
  width: this.lasershootsties,
  heigth: this.lasershootsties,
  count: 0

  
}
  }

*/
}

