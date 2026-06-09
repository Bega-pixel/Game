/**
 * CONSTANTES DEL JUEGO
 * Configuración global y ajustes del juego
 */

// ========== CONTROLES ==========
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_FIRE = 32;      // Espacio
const KEY_PAUSE = 80;     // P
const KEY_RELOAD = 82;    // R

// ========== VELOCIDADES ==========
const SPEED = 5;          // Velocidad base del jugador
const SPEED2 = 6;         // Velocidad alternativa

// ========== CONFIGURACIÓN DEL CANVAS ==========
const CANVAS_WIDTH = 1760;
const CANVAS_HEIGHT = 975;

// ========== CONFIGURACIÓN DE NIVELES ==========
const LEVELS = {
  1: {
    name: "Escape de Hoth",
    tiefighters: 18,
    vaderties: 10,
    difficulty: 1.0,
    enemySpeed: 1,
    spawnRate: 60,
    description: "Los rebeldes escapan de Hoth perseguidos por el Imperio"
  },
  2: {
    name: "Persecución Espacial",
    tiefighters: 24,
    vaderties: 15,
    difficulty: 1.3,
    enemySpeed: 1.3,
    spawnRate: 45,
    description: "La persecución se intensifica en el espacio abierto"
  },
  3: {
    name: "Las Nubes de Bespin",
    tiefighters: 30,
    vaderties: 20,
    difficulty: 1.6,
    enemySpeed: 1.6,
    spawnRate: 35,
    description: "Batalla en las nubes de Bespin"
  },
  4: {
    name: "Batalla Final",
    tiefighters: 36,
    vaderties: 25,
    difficulty: 2.0,
    enemySpeed: 2.0,
    spawnRate: 25,
    description: "El enfrentamiento se acerca"
  },
  5: {
    name: "Enfrentamiento con Vader",
    tiefighters: 42,
    vaderties: 30,
    difficulty: 2.5,
    enemySpeed: 2.5,
    spawnRate: 15,
    description: "La batalla final contra las fuerzas de Vader"
  }
};

// ========== CONFIGURACIÓN DEL JUEGO ==========
const GAME_CONFIG = {
  initialLives: 3,
  initialScore: 0,
  maxLevels: 5,
  fps: 1000 / 60
};

// ========== PUNTUACIÓN POR ACCIÓN ==========
const SCORE_CONFIG = {
  killTiefighter: 100,
  killVadertie: 250,
  levelComplete: 1000,
  perfectLevel: 5000  // Sin recibir daño
};

// ========== ESTILOS DE TEXTO ==========
const UI_STYLES = {
  font: 'bold 20px Arial, sans-serif',
  fontLarge: 'bold 48px Arial, sans-serif',
  fontSmall: 'bold 14px Arial, sans-serif',
  textColor: '#00FF00',
  errorColor: '#FF0000',
  successColor: '#00FF00',
  warningColor: '#FFFF00'
};

// ========== CONFIGURACIÓN DE COLISIONES ==========
const COLLISION_CONFIG = {
  damageFromEnemy: 1,      // Vidas perdidas por colisión
  laserDamage: 1           // Daño del laser del jugador
};
