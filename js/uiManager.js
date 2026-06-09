/**
 * UI MANAGER
 * Gestor de interfaz de usuario - HUD, pantallas finales, transiciones
 */

class UIManager {
  /**
   * Constructor del UIManager
   * @param {CanvasRenderingContext2D} ctx - Contexto del canvas
   */
  constructor(ctx) {
    this.ctx = ctx;
    this.canvasWidth = CANVAS_WIDTH;
    this.canvasHeight = CANVAS_HEIGHT;
  }

  /**
   * Dibujar HUD (Heads Up Display)
   * @param {number} level - Nivel actual
   * @param {number} lives - Vidas restantes
   * @param {number} score - Puntuación actual
   * @param {number} enemiesKilled - Enemigos destruidos
   */
  drawHUD(level, lives, score, enemiesKilled) {
    const hudY = 30;
    const hudX = 20;

    // Fondo del HUD (semi-transparente)
    this.ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
    this.ctx.fillRect(0, 0, this.canvasWidth, 60);

    // Texto del HUD
    this.ctx.fillStyle = UI_STYLES.textColor;
    this.ctx.font = UI_STYLES.font;

    // Nivel
    this.ctx.fillText(`LEVEL: ${level}/5`, hudX, hudY);

    // Vidas con corazones
    const livesText = `LIVES: ${'❤️'.repeat(Math.max(0, lives))}`;
    this.ctx.fillText(livesText, hudX + 250, hudY);

    // Puntuación
    this.ctx.fillText(`SCORE: ${score}`, hudX + 600, hudY);

    // Enemigos destruidos
    this.ctx.fillText(`KILLS: ${enemiesKilled}`, hudX + 1050, hudY);

    // Línea separadora
    this.ctx.strokeStyle = UI_STYLES.textColor;
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(0, 65);
    this.ctx.lineTo(this.canvasWidth, 65);
    this.ctx.stroke();
  }

  /**
   * Dibujar overlay de pausa
   */
  drawPauseOverlay() {
    // Overlay oscuro
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Texto de pausa
    this.ctx.fillStyle = UI_STYLES.textColor;
    this.ctx.font = UI_STYLES.fontLarge;
    this.ctx.textAlign = 'center';

    this.ctx.fillText('⏸ PAUSED ⏸', this.canvasWidth / 2, this.canvasHeight / 2 - 50);

    this.ctx.font = UI_STYLES.font;
    this.ctx.fillText('Presiona P para continuar', this.canvasWidth / 2, this.canvasHeight / 2 + 50);
    this.ctx.fillText('Presiona R para reintentar', this.canvasWidth / 2, this.canvasHeight / 2 + 100);

    this.ctx.textAlign = 'left';
  }

  /**
   * Dibujar pantalla de transición de nivel
   * @param {number} level - Nivel completado
   * @param {number} nextLevel - Siguiente nivel
   */
  drawLevelTransitionScreen(level, nextLevel) {
    // Fondo oscuro
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = UI_STYLES.successColor;
    this.ctx.font = UI_STYLES.fontLarge;

    // Título
    this.ctx.fillText(`✅ NIVEL ${level} COMPLETADO ✅`, this.canvasWidth / 2, 150);

    // Información
    this.ctx.font = UI_STYLES.font;
    this.ctx.fillStyle = UI_STYLES.textColor;

    if (nextLevel <= GAME_CONFIG.maxLevels) {
      this.ctx.fillText(`Siguiente: ${LEVELS[nextLevel].name}`, this.canvasWidth / 2, 250);
      this.ctx.fillText(`+${SCORE_CONFIG.levelComplete} XP`, this.canvasWidth / 2, 320);
    } else {
      this.ctx.fillStyle = UI_STYLES.successColor;
      this.ctx.fillText('🏆 ¡HAS COMPLETADO TODOS LOS NIVELES! 🏆', this.canvasWidth / 2, 250);
    }

    this.ctx.fillStyle = UI_STYLES.warningColor;
    this.ctx.font = UI_STYLES.fontSmall;
    this.ctx.fillText('Cargando siguiente nivel...', this.canvasWidth / 2, this.canvasHeight - 50);

    this.ctx.textAlign = 'left';
  }

  /**
   * Dibujar pantalla de victoria
   * @param {number} score - Puntuación final
   * @param {number} enemiesKilled - Total de enemigos destruidos
   */
  drawVictoryScreen(score, enemiesKilled) {
    // Fondo con gradiente
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.ctx.textAlign = 'center';

    // Título principal
    this.ctx.fillStyle = UI_STYLES.successColor;
    this.ctx.font = UI_STYLES.fontLarge;
    this.ctx.fillText('🏆 ¡VICTORIA JEDI! 🏆', this.canvasWidth / 2, 100);

    // Cita de Yoda
    this.ctx.font = UI_STYLES.font;
    this.ctx.fillStyle = UI_STYLES.textColor;
    this.ctx.fillText('"A Jedi uses the Force for', this.canvasWidth / 2, 200);
    this.ctx.fillText('knowledge and defense, never for attack."', this.canvasWidth / 2, 250);

    // Estadísticas
    this.ctx.fillStyle = UI_STYLES.warningColor;
    this.ctx.font = UI_STYLES.font;
    this.ctx.fillText('═══════════════════════════════', this.canvasWidth / 2, 320);

    this.ctx.fillStyle = UI_STYLES.textColor;
    this.ctx.fillText(`📊 Score Final: ${score} XP`, this.canvasWidth / 2, 380);
    this.ctx.fillText(`🎯 Enemigos Destruidos: ${enemiesKilled}`, this.canvasWidth / 2, 430);
    this.ctx.fillText(`⭐ Nivel: 5/5 Completado`, this.canvasWidth / 2, 480);

    this.ctx.fillStyle = UI_STYLES.successColor;
    this.ctx.fillText('═══════════════════════════════', this.canvasWidth / 2, 530);

    // Mensaje final
    this.ctx.fillStyle = UI_STYLES.successColor;
    this.ctx.font = UI_STYLES.fontSmall;
    this.ctx.fillText('¡Has escapado de Hoth y te has reunido con los Rebeldes!', this.canvasWidth / 2, 600);

    // Instrucciones
    this.ctx.fillStyle = UI_STYLES.warningColor;
    this.ctx.fillText('Presiona R para jugar de nuevo | Presiona F5 para recargar', this.canvasWidth / 2, this.canvasHeight - 50);

    this.ctx.textAlign = 'left';
  }

  /**
   * Dibujar pantalla de Game Over
   * @param {number} level - Nivel alcanzado
   * @param {number} score - Puntuación obtenida
   * @param {number} enemiesKilled - Enemigos destruidos
   */
  drawGameOverScreen(level, score, enemiesKilled) {
    // Fondo oscuro
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.ctx.textAlign = 'center';

    // Título
    this.ctx.fillStyle = UI_STYLES.errorColor;
    this.ctx.font = UI_STYLES.fontLarge;
    this.ctx.fillText('☠️ GAME OVER ☠️', this.canvasWidth / 2, 100);

    // Cita temática
    this.ctx.font = UI_STYLES.font;
    this.ctx.fillStyle = UI_STYLES.textColor;
    this.ctx.fillText('"The Force is not with you"', this.canvasWidth / 2, 200);

    // Separador
    this.ctx.fillStyle = UI_STYLES.errorColor;
    this.ctx.fillText('═══════════════════════════════', this.canvasWidth / 2, 270);

    // Estadísticas
    this.ctx.fillStyle = UI_STYLES.textColor;
    this.ctx.font = UI_STYLES.font;
    this.ctx.fillText(`📍 Nivel Alcanzado: ${level}/5`, this.canvasWidth / 2, 330);
    this.ctx.fillText(`🎯 Enemigos Destruidos: ${enemiesKilled}`, this.canvasWidth / 2, 380);
    this.ctx.fillText(`📊 Score Obtenido: ${score} XP`, this.canvasWidth / 2, 430);

    this.ctx.fillStyle = UI_STYLES.errorColor;
    this.ctx.fillText('═══════════════════════════════', this.canvasWidth / 2, 490);

    // Consejo
    this.ctx.fillStyle = UI_STYLES.warningColor;
    this.ctx.font = UI_STYLES.fontSmall;
    this.ctx.fillText('Recuerda: "Wars not make one great"', this.canvasWidth / 2, 560);

    // Instrucciones
    this.ctx.fillText('Presiona R para reintentar | Presiona F5 para recargar', this.canvasWidth / 2, this.canvasHeight - 50);

    this.ctx.textAlign = 'left';
  }

  /**
   * Dibujar información de nivel (debugging)
   * @param {object} levelInfo - Información del nivel
   */
  drawLevelInfo(levelInfo) {
    this.ctx.fillStyle = UI_STYLES.textColor;
    this.ctx.font = UI_STYLES.fontSmall;

    let yPos = CANVAS_HEIGHT - 100;

    this.ctx.fillText(`Nivel: ${levelInfo.level}/${GAME_CONFIG.maxLevels}`, 20, yPos);
    this.ctx.fillText(`Enemigos Totales: ${levelInfo.totalEnemies}`, 20, yPos + 20);
    this.ctx.fillText(`Enemigos Restantes: ${levelInfo.remaining}`, 20, yPos + 40);
    this.ctx.fillText(`Progreso: ${levelInfo.progress}%`, 20, yPos + 60);
    this.ctx.fillText(`Dificultad: ${(levelInfo.difficulty * 100).toFixed(0)}%`, 20, yPos + 80);
  }

  /**
   * Dibujar pantalla de inicio
   */
  drawStartScreen() {
    // Fondo oscuro
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.ctx.textAlign = 'center';

    // Título
    this.ctx.fillStyle = UI_STYLES.successColor;
    this.ctx.font = UI_STYLES.fontLarge;
    this.ctx.fillText('STAR WARS', this.canvasWidth / 2, 100);
    this.ctx.fillText('The Rogue X-Wing', this.canvasWidth / 2, 180);

    // Subtítulo
    this.ctx.font = UI_STYLES.font;
    this.ctx.fillStyle = UI_STYLES.textColor;
    this.ctx.fillText('Episode V.1.0', this.canvasWidth / 2, 260);
    this.ctx.fillText('The Escape of Hoth', this.canvasWidth / 2, 310);

    // Instrucciones
    this.ctx.font = UI_STYLES.fontSmall;
    this.ctx.fillStyle = UI_STYLES.warningColor;
    this.ctx.fillText('━━━━━━━━━━━━━━━━━━━━━━━━━━━', this.canvasWidth / 2, 380);
    this.ctx.fillText('⬅️ A: Mover Izquierda', this.canvasWidth / 2, 430);
    this.ctx.fillText('➡️ D: Mover Derecha', this.canvasWidth / 2, 460);
    this.ctx.fillText('🔫 ESPACIO: Disparar', this.canvasWidth / 2, 490);
    this.ctx.fillText('⏸️ P: Pausar', this.canvasWidth / 2, 520);
    this.ctx.fillText('🔄 R: Reintentar', this.canvasWidth / 2, 550);
    this.ctx.fillText('━━━━━━━━━━━━━━━━━━━━━━━━━━━', this.canvasWidth / 2, 580);

    // Botón de inicio
    this.ctx.fillStyle = UI_STYLES.successColor;
    this.ctx.font = UI_STYLES.font;
    this.ctx.fillText('PRESIONA ESPACIO PARA COMENZAR', this.canvasWidth / 2, this.canvasHeight - 100);

    this.ctx.textAlign = 'left';
  }

  /**
   * Dibujar aviso temporal
   * @param {string} message - Mensaje a mostrar
   * @param {string} color - Color del texto
   */
  drawNotification(message, color = UI_STYLES.textColor) {
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = color;
    this.ctx.font = UI_STYLES.font;
    this.ctx.fillText(message, this.canvasWidth / 2, 100);
    this.ctx.textAlign = 'left';
  }
}
