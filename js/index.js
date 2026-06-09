/**
 * INDEX.JS
 * Script principal - Inicialización del juego
 */

// Variables globales
let gameManager = null;

/**
 * Inicializar el juego cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎮 Inicializando juego...');
  
  // Obtener canvas
  const canvas = document.getElementById('game-canvas');
  
  if (!canvas) {
    console.error('❌ Error: Canvas no encontrado');
    return;
  }

  // Configurar dimensiones del canvas
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  console.log(`✅ Canvas configurado: ${CANVAS_WIDTH}x${CANVAS_HEIGHT}`);

  // Crear GameManager
  gameManager = new GameManager(canvas);
  gameManager.initialize();

  // Comenzar el juego
  startGame();
});

/**
 * Iniciar el juego
 */
function startGame() {
  console.log('🚀 Iniciando juego...');
  gameManager.start();
}

/**
 * Reiniciar el juego
 */
function restartGame() {
  console.log('🔄 Reiniciando juego...');
  if (gameManager) {
    gameManager.restart();
  }
}

/**
 * Log de información del juego
 */
function logGameInfo() {
  if (gameManager) {
    const state = gameManager.getGameState();
    console.log('📊 Estado del juego:', state);
  }
}

// Exponer funciones globales para debugging
window.gameManager = gameManager;
window.startGame = startGame;
window.restartGame = restartGame;
window.logGameInfo = logGameInfo;

console.log('✅ Juego cargado exitosamente');
console.log('💡 Comandos disponibles:');
console.log('  - logGameInfo() : Ver estado actual');
console.log('  - restartGame() : Reiniciar juego');
console.log('  - gameManager.getGameState() : Estado detallado');
