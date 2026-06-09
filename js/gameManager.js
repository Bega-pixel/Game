/**
 * GAME MANAGER
 * Gestor principal del estado y lógica del juego
 */

class GameManager {
  /**
   * Constructor del GameManager
   * @param {HTMLCanvasElement} canvas - Elemento canvas del juego
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    
    // Estado del juego
    this.gameState = 'menu'; // menu, playing, paused, levelComplete, gameOver, victory
    this.currentLevel = 1;
    this.lives = GAME_CONFIG.initialLives;
    this.score = GAME_CONFIG.initialScore;
    this.enemiesKilled = 0;
    
    // Componentes del juego
    this.background = null;
    this.xwing = null;
    this.levelManager = null;
    this.uiManager = null;
    
    // Control de juego
    this.drawIntervalId = null;
    this.isPaused = false;
    this.levelStartTime = null;
    
    // Listeners
    this.setupEventListeners();
  }

  /**
   * Configurar event listeners
   */
  setupEventListeners() {
    document.addEventListener('keydown', (e) => this.onKeyDown(e));
    document.addEventListener('keyup', (e) => this.onKeyUp(e));
  }

  /**
   * Inicializar el juego
   */
  initialize() {
    this.background = new Background(this.ctx);
    this.xwing = new Xwing(this.ctx, CANVAS_WIDTH / 2, CANVAS_HEIGHT - 100);
    this.levelManager = new LevelManager(this.ctx);
    this.uiManager = new UIManager(this.ctx);
    
    console.log('✅ GameManager inicializado correctamente');
  }

  /**
   * Iniciar el juego
   */
  start() {
    if (this.gameState === 'menu') {
      this.gameState = 'playing';
      this.currentLevel = 1;
      this.lives = GAME_CONFIG.initialLives;
      this.score = GAME_CONFIG.initialScore;
      this.enemiesKilled = 0;
      this.levelStartTime = Date.now();
      
      this.levelManager.loadLevel(this.currentLevel);
      this.startGameLoop();
      
      console.log(`🎮 Iniciando Nivel ${this.currentLevel}`);
    }
  }

  /**
   * Iniciar el loop del juego
   */
  startGameLoop() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.update();
        this.draw();
      }, GAME_CONFIG.fps);
    }
  }

  /**
   * Pausar el juego
   */
  pause() {
    if (this.gameState === 'playing') {
      this.gameState = 'paused';
      this.isPaused = true;
      console.log('⏸️ Juego pausado');
    }
  }

  /**
   * Reanudar el juego
   */
  resume() {
    if (this.gameState === 'paused') {
      this.gameState = 'playing';
      this.isPaused = false;
      console.log('▶️ Juego reanudado');
    }
  }

  /**
   * Actualizar lógica del juego
   */
  update() {
    if (this.isPaused || this.gameState !== 'playing') return;

    // Actualizar posiciones
    if (this.xwing) this.xwing.move();
    if (this.levelManager) this.levelManager.moveEnemies();

    // Verificar colisiones
    this.checkCollisions();

    // Verificar si nivel está completado
    if (this.levelManager.isLevelComplete()) {
      this.onLevelComplete();
    }

    // Verificar game over
    if (this.lives <= 0) {
      this.gameOver();
    }
  }

  /**
   * Dibujar elementos del juego
   */
  draw() {
    // Limpiar canvas
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (this.gameState === 'playing' || this.gameState === 'paused') {
      // Dibujar fondo
      if (this.background) this.background.draw();

      // Dibujar jugador
      if (this.xwing) this.xwing.draw();

      // Dibujar enemigos
      if (this.levelManager) {
        this.levelManager.drawEnemies();
      }

      // Dibujar UI
      if (this.uiManager) {
        this.uiManager.drawHUD(
          this.currentLevel,
          this.lives,
          this.score,
          this.enemiesKilled
        );
      }

      // Si está pausado, mostrar overlay
      if (this.isPaused) {
        this.uiManager.drawPauseOverlay();
      }
    }
  }

  /**
   * Verificar colisiones
   */
  checkCollisions() {
    if (!this.levelManager || !this.xwing) return;

    // Colisión con enemigos
    const allEnemies = [
      ...this.levelManager.tiefighters,
      ...this.levelManager.vaderties
    ];

    for (let enemy of allEnemies) {
      if (this.xwing.collides(enemy)) {
        this.onPlayerHit(enemy);
      }
    }

    // Colisión de lasers con enemigos
    for (let laser of this.xwing.lasershoots) {
      for (let i = 0; i < this.levelManager.tiefighters.length; i++) {
        if (laser.collides(this.levelManager.tiefighters[i])) {
          this.onEnemyHit('tiefighter', i);
          this.xwing.lasershoots = this.xwing.lasershoots.filter(l => l !== laser);
          break;
        }
      }

      for (let i = 0; i < this.levelManager.vaderties.length; i++) {
        if (laser.collides(this.levelManager.vaderties[i])) {
          this.onEnemyHit('vader', i);
          this.xwing.lasershoots = this.xwing.lasershoots.filter(l => l !== laser);
          break;
        }
      }
    }
  }

  /**
   * Cuando el jugador es golpeado
   */
  onPlayerHit(enemy) {
    this.lives -= COLLISION_CONFIG.damageFromEnemy;
    console.log(`💥 Impacto! Vidas restantes: ${this.lives}`);
    
    if (this.lives > 0) {
      // Reproducir sonido de daño
      // this.soundManager.playHit();
    }
  }

  /**
   * Cuando un enemigo es golpeado
   */
  onEnemyHit(type, index) {
    if (type === 'tiefighter') {
      this.levelManager.tiefighters.splice(index, 1);
      this.score += SCORE_CONFIG.killTiefighter;
      console.log(`🎯 TIE Fighters destruido! +${SCORE_CONFIG.killTiefighter} XP`);
    } else if (type === 'vader') {
      this.levelManager.vaderties.splice(index, 1);
      this.score += SCORE_CONFIG.killVadertie;
      console.log(`⚡ Vader TIE destruido! +${SCORE_CONFIG.killVadertie} XP`);
    }
    
    this.enemiesKilled++;
  }

  /**
   * Cuando se completa un nivel
   */
  onLevelComplete() {
    this.gameState = 'levelComplete';
    this.score += SCORE_CONFIG.levelComplete;
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = null;

    console.log(`✅ ¡Nivel ${this.currentLevel} completado!`);

    // Mostrar pantalla de transición
    setTimeout(() => {
      if (this.currentLevel < GAME_CONFIG.maxLevels) {
        this.nextLevel();
      } else {
        this.victory();
      }
    }, 2000);
  }

  /**
   * Ir al siguiente nivel
   */
  nextLevel() {
    this.currentLevel++;
    this.levelStartTime = Date.now();
    this.levelManager.loadLevel(this.currentLevel);
    this.gameState = 'playing';
    this.startGameLoop();
    
    console.log(`🚀 Iniciando Nivel ${this.currentLevel}`);
  }

  /**
   * Game Over
   */
  gameOver() {
    this.gameState = 'gameOver';
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = null;

    console.log('☠️ ¡GAME OVER!');
    
    // Mostrar pantalla de game over después de un tiempo
    setTimeout(() => {
      this.uiManager.drawGameOverScreen(
        this.currentLevel,
        this.score,
        this.enemiesKilled
      );
    }, 500);
  }

  /**
   * Victoria
   */
  victory() {
    this.gameState = 'victory';
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = null;

    console.log('🏆 ¡VICTORIA!');
    
    // Mostrar pantalla de victoria
    setTimeout(() => {
      this.uiManager.drawVictoryScreen(this.score, this.enemiesKilled);
    }, 500);
  }

  /**
   * Reiniciar el juego
   */
  restart() {
    this.gameState = 'menu';
    this.currentLevel = 1;
    this.lives = GAME_CONFIG.initialLives;
    this.score = GAME_CONFIG.initialScore;
    this.enemiesKilled = 0;
    
    if (this.drawIntervalId) {
      clearInterval(this.drawIntervalId);
      this.drawIntervalId = null;
    }
    
    console.log('🔄 Juego reiniciado');
    this.start();
  }

  /**
   * Manejar evento de tecla presionada
   */
  onKeyDown(event) {
    if (this.gameState !== 'playing') return;

    switch (event.keyCode) {
      case KEY_PAUSE:
        this.isPaused ? this.resume() : this.pause();
        break;
      case KEY_RELOAD:
        this.restart();
        break;
      default:
        if (this.xwing && !this.isPaused) {
          this.xwing.onKeyEvent(event);
        }
    }
  }

  /**
   * Manejar evento de tecla liberada
   */
  onKeyUp(event) {
    if (this.gameState !== 'playing') return;
    
    if (this.xwing) {
      this.xwing.onKeyEvent(event);
    }
  }

  /**
   * Obtener estado del juego
   */
  getGameState() {
    return {
      state: this.gameState,
      currentLevel: this.currentLevel,
      lives: this.lives,
      score: this.score,
      enemiesKilled: this.enemiesKilled
    };
  }
}
