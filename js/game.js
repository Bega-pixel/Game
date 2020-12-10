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
    this.drawCount = 0;

    this.gameStatus = {
      over: false,
      message: "",
      fillStyle: 'red',
      font: 'italic bold 36px Arial, sans-serif',
    }

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


      }, this.fps);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //this.lasershoots = this.lasershoots.filter(lasershoot => (lasershoot.y + lasershoot.height) <= 0);
    //this.tiefigthers = this.tiefigthers.filter(tiefigther => (tiefigther.y + tiefigther.height) > 985);
    this.xwing.clear();

    for (let m = 0; m < this.xwing.lasershoots.length; m++) {
      if (m.y <= 0) {
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
    this.vaderties.forEach(vadertie => vadertie.draw());
    this.tiefigthers.forEach(tiefigther => tiefigther.draw());
    this.lasershootsties.map(laser => laser.draw());

    if (this.tiefigthers.length === 0 && this.vaderties.length === 0) {
      clearInterval(this.drawIntervalId);
      ctx.fillStyle = 'Green';
      ctx.font = this.gameStatus.font;
      ctx.fillText('You Scape and will warp to met with the Rebels!', this.width * .5 - 80, 50);
      alert('You Scape and will warp to met with the Rebels!');
    }


  }

  move() {
    this.xwing.move();
    this.vaderties.forEach(vadertie => vadertie.move());
    this.tiefigthers.forEach(tiefigther => tiefigther.move());
    this.lasershootsties.map(laser => laser.move())
    //this.tiefigthers.forEach(tiefigther => tiefigther.shooting());
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

  endGame() {
    this.stop();
  }

  stop() {
    clearInterval(this.setIntervalId);
    this.drawIntervalId = undefined;
  }

  checkCollisions() {

    for (let c = 0; c < this.tiefigthers.length; c++) {
      if (this.xwing.collides(this.tiefigthers[c])) {
        this.tiefigthers.splice([c], 1);
        this.gameStatus.over = true;
        this.gameStatus.message = 'You Died!'
        //alert('Just take the wrong turn You Died!');
        //swal('Just take the wrong turn You Died!');
        swal("Just not your lucky day You Died!", {
            buttons: {
              cancel: "Yoda",
              catch: {
                text: "Try again",
                value: "catch",
              },
              defeat: true,
            },
          })
          .then((value) => {
            switch (value) {

              case "defeat":
                swal("Do. Or do not. There is no try.! You gained 500 XP!");
                break;

              case "catch":
                swal("The force is strong with you");
                break;

              default:
                swal(" A Jedi uses the Force for knowledge and defense, never for attack.");
            }
          });
      }
    }

    for (let t = 0; t < this.vaderties.length; t++) {
      if (this.xwing.collides(this.vaderties[t])) {
        this.vaderties.splice([t], 1);
        this.gameStatus.over = true;
        this.gameStatus.message = 'You Died!'
        //alert('The force is not strong with you, Dead!');
        swal("The force is not strong with you, Dead!", {
            buttons: {
              cancel: "Yoda",
              catch: {
                text: "Try again",
                value: "catch",
              },
              defeat: true,
            },
          })
          .then((value) => {
            switch (value) {

              case "defeat":
                swal("Wars not make one great! You gained 1000 XP!");
                break;

              case "catch":
                swal("The force is strong with you");
                break;

              default:
                swal("Fear is the path to the dark side…fear leads to anger…anger leads to hate…hate leads to suffering.");
            }
          });
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

    if (this.tiefigthers.y > 975 || this.vaderties.y > 975) {
      this.gameStatus.over = true;
      this.gameStatus.message = 'You are trap!';

    }

    if (this.gameStatus.over === true) {
      clearInterval(this.drawIntervalId);
      ctx.fillStyle = 'red';
      this.ctx.font = this.gameStatus.font;
      ctx.fillText(this.gameStatus.message, this.width * .5 - 80, 50);
    }

    if (this.tiefigthers.length === 0 && this.vaderties.length === 0) {
      //alert('You Scape and will warp to met with the Rebels!')
      swal("You Scape and will warp to met with the Rebels!", {
          buttons: {
            cancel: "Yoda",
            catch: {
              text: "Try again",
              value: "catch",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {

            case "defeat":
              swal("Wars not make one great! You gained 100000 XP!");
              break;

            case "catch":
              swal("The force is strong with you");
              break;

            default:
              swal("A Jedi uses the Force for knowledge and defense, never for attack.");
          }
        });
    }

  }

  shooting() {
    if (this.lasershootsties.length === 0) {
      this.lasershoot = new Lasershoot(this.ctx, this.x, this.y + 70);
      this.lasershoots.push(this.lasershoot.tieShoots());
    }
  }
  tieShoots() {
    if (Math.floor(Math.random(0, this.tiefigthers.length * 10) === 5)) {
      this.lasershootsties.push(this.lasershoottie.draw());
    }
  }

}
