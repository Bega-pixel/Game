/**
 * LEVEL MANAGER
 * Gestor de niveles, enemigos y dificultad progresiva
 */

class LevelManager {
  /**
   * Constructor del LevelManager
   * @param {CanvasRenderingContext2D} ctx - Contexto del canvas
   */
  constructor(ctx) {
    this.ctx = ctx;
    this.currentLevel = 1;
    this.tiefighters = [];
    this.vaderties = [];
    this.enemiesKilled = 0;
    this.enemiesSpawned = 0;
  }

  /**
   * Cargar un nivel específico
   * @param {number} levelNumber - Número del nivel (1-5)
   */
  loadLevel(levelNumber) {
    this.currentLevel = levelNumber;
    const levelConfig = LEVELS[levelNumber];

    if (!levelConfig) {
      console.error(`❌ Nivel ${levelNumber} no existe`);
      return;
    }

    console.log(`📋 Cargando Nivel ${levelNumber}: ${levelConfig.name}`);
    console.log(`   Descripción: ${levelConfig.description}`);

    // Limpiar enemigos anteriores
    this.tiefighters = [];
    this.vaderties = [];
    this.enemiesKilled = 0;
    this.enemiesSpawned = 0;

    // Crear enemigos del nivel
    this.createTiefighters(levelConfig.tiefighters);
    this.createVaderties(levelConfig.vaderties);

    console.log(`✅ Nivel ${levelNumber} cargado`);
    console.log(`   TIE Fighters: ${this.tiefighters.length}`);
    console.log(`   Vader TIEs: ${this.vaderties.length}`);
    console.log(`   Total enemigos: ${this.tiefighters.length + this.vaderties.length}`);
  }

  /**
   * Crear TIE Fighters con distribución en pantalla
   * @param {number} count - Cantidad de TIE Fighters
   */
  createTiefighters(count) {
    const cols = 9; // Columnas
    const rows = Math.ceil(count / cols); // Filas necesarias
    const spacingX = CANVAS_WIDTH / (cols + 1);
    const spacingY = 80;

    let created = 0;

    for (let row = 0; row < rows && created < count; row++) {
      for (let col = 0; col < cols && created < count; col++) {
        const x = spacingX * (col + 1);
        const y = spacingY + (row * spacingY);

        const tiefighter = new Tiefigther(this.ctx, x, y);
        this.tiefighters.push(tiefighter);
        created++;
      }
    }
  }

  /**
   * Crear Vader TIEs con distribución en pantalla
   * @param {number} count - Cantidad de Vader TIEs
   */
  createVaderties(count) {
    const cols = 5; // Menos columnas que TIE Fighters
    const rows = Math.ceil(count / cols);
    const spacingX = CANVAS_WIDTH / (cols + 1);
    const spacingY = 90;

    let created = 0;

    for (let row = 0; row < rows && created < count; row++) {
      for (let col = 0; col < cols && created < count; col++) {
        const x = spacingX * (col + 1);
        const y = -300 + (row * spacingY); // Empiezan fuera de pantalla

        const vadertie = new Vadertie(this.ctx, x, y);
        this.vaderties.push(vadertie);
        created++;
      }
    }
  }

  /**
   * Mover todos los enemigos
   */
  moveEnemies() {
    // Mover TIE Fighters
    for (let tiefighter of this.tiefighters) {
      tiefighter.move();
    }

    // Mover Vader TIEs
    for (let vadertie of this.vaderties) {
      vadertie.move();
    }

    // Limpiar enemigos que salieron de pantalla
    this.cleanupOffscreenEnemies();
  }

  /**
   * Dibujar todos los enemigos
   */
  drawEnemies() {
    // Dibujar TIE Fighters
    for (let tiefighter of this.tiefighters) {
      tiefighter.draw();
    }

    // Dibujar Vader TIEs
    for (let vadertie of this.vaderties) {
      vadertie.draw();
    }
  }

  /**
   * Limpiar enemigos que salieron de pantalla
   */
  cleanupOffscreenEnemies() {
    // Limpiar TIE Fighters
    this.tiefighters = this.tiefighters.filter(tiefighter => {
      return tiefighter.y < CANVAS_HEIGHT + 100;
    });

    // Limpiar Vader TIEs
    this.vaderties = this.vaderties.filter(vadertie => {
      return vadertie.y < CANVAS_HEIGHT + 100;
    });
  }

  /**
   * Verificar si se completó el nivel
   * @returns {boolean} True si no hay más enemigos
   */
  isLevelComplete() {
    return this.tiefighters.length === 0 && this.vaderties.length === 0;
  }

  /**
   * Obtener cantidad total de enemigos
   * @returns {number} Total de enemigos en pantalla
   */
  getTotalEnemies() {
    return this.tiefighters.length + this.vaderties.length;
  }

  /**
   * Obtener información de dificultad del nivel actual
   * @returns {object} Configuración del nivel
   */
  getCurrentLevelConfig() {
    return LEVELS[this.currentLevel];
  }

  /**
   * Obtener progreso del nivel
   * @returns {object} Información del progreso
   */
  getProgressInfo() {
    const config = this.getCurrentLevelConfig();
    const totalEnemies = config.tiefighters + config.vaderties;
    const remaining = this.getTotalEnemies();
    const destroyed = totalEnemies - remaining;
    const progress = Math.round((destroyed / totalEnemies) * 100);

    return {
      level: this.currentLevel,
      totalEnemies,
      remaining,
      destroyed,
      progress,
      difficulty: config.difficulty,
      name: config.name
    };
  }

  /**
   * Obtener estadísticas del nivel
   * @returns {object} Estadísticas
   */
  getStats() {
    return {
      level: this.currentLevel,
      tiefightersRemaining: this.tiefighters.length,
      vadertiesRemaining: this.vaderties.length,
      enemiesRemaining: this.getTotalEnemies()
    };
  }
}
