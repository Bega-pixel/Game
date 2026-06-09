# Star Wars - The Rogue X-Wing 🎮

> Una experiencia de juego inmersiva inspirada en Star Wars: Episode V - "The Empire Strikes Back"

## 📺 Demo en Vivo

🎮 **Juega ahora**: https://bega-pixel.github.io/Game/

---

## 📖 Descripción

*The Rogue X-Wing* es un juego de acción desarrollado en HTML5, CSS y JavaScript vanilla. Encarnando a un piloto rebelde en un X-Wing, debes escapar de Hoth mientras evitas las fuerzas imperiales (TIE Fighters y Vader TIEs) en cinco niveles progresivamente desafiantes.

### Narrativa
> *"Los rebeldes son atacados en Hoth por Darth Vader y el Imperio. Después de una ardua batalla logran escapar. Leia Organa y Han Solo escapan hacia Cloud City, donde les espera un viejo amigo. Luke Skywalker toma un curso inesperado hacia Dagoba. En este frenesí de escape, no todos los rebeldes logran huir a tiempo. Uno de sus mejores pilotos cae en batalla, pero ahora logra tomar un X-Wing y despegar..."*

---

## 🎯 Características Principales

### ✨ Sistema de Niveles (5 Niveles)
Cada nivel aumenta la dificultad progresivamente:

| Nivel | Nombre | TIEs | Vaders | Dificultad | Enemigos Totales |
|-------|--------|------|--------|-----------|-----------------|
| 1 | Escape de Hoth | 18 | 10 | ⭐ Fácil | 28 |
| 2 | Persecución Espacial | 24 | 15 | ⭐⭐ Normal | 39 |
| 3 | Las Nubes de Bespin | 30 | 20 | ⭐⭐⭐ Difícil | 50 |
| 4 | Batalla Final | 36 | 25 | ⭐⭐⭐⭐ Muy Difícil | 61 |
| 5 | Enfrentamiento con Vader | 42 | 30 | ⭐⭐⭐⭐⭐ Legendario | 72 |

### ❤️ Sistema de Vidas
- Comienza con **3 vidas**
- Cada colisión con enemigos te resta 1 vida
- Sin vidas = Game Over
- Completa todos los niveles = Victoria

### 🎮 Mecánica de Juego
- **Movimiento lateral** - Esquiva enemigos
- **Sistema de disparo** - Destruye TIE Fighters y Vader TIEs
- **Dificultad progresiva** - Mayor velocidad, más enemigos
- **Pausas** - Descansa cuando lo necesites
- **Reintentos** - Reinicia niveles fallidos

### 🏆 Pantallas Finales
- ✅ **Pantalla de Victoria** - Completa todos los 5 niveles
- ☠️ **Game Over** - Si pierdes todas las vidas
- ⏸️ **Transiciones** - Entre niveles con información

### 📊 Sistema de Puntuación
```javascript
- Destruir TIE Fighter: +100 XP
- Destruir Vader TIE: +250 XP
- Completar Nivel: +1,000 XP
- Perfecto (sin daño): +5,000 XP bonus
```

---

## 🕹️ Controles

| Acción | Tecla |
|--------|-------|
| Mover Izquierda | ⬅️ A / Flecha Izquierda |
| Mover Derecha | ➡️ D / Flecha Derecha |
| Disparar | 🔫 ESPACIO |
| Pausar | ⏸️ P |
| Reintentar | 🔄 R |

---

## 🏗️ Arquitectura del Código

### Estructura Profesional MVC
```
js/
├── constants.js          # Configuración global
├── gameManager.js        # Lógica principal del juego
├── levelManager.js       # Gestión de niveles y enemigos
├── uiManager.js          # Interfaz y pantallas
├── xwing.js             # Clase del jugador
├── tiefigthers.js       # Clase de enemigos TIE Fighter
├── vadertie.js          # Clase de enemigos Vader TIE
├── lasershoot.js        # Sistema de disparo
├── background.js        # Fondo animado
└── index.js             # Punto de entrada
```

### Clases Principales

**GameManager**
- Controla el estado general del juego
- Gestiona vidas, puntuación y nivel
- Detecta colisiones y condiciones de victoria/derrota

**LevelManager**
- Carga enemigos dinámicamente por nivel
- Ajusta dificultad progresiva
- Verifica si el nivel está completado

**UIManager**
- Renderiza HUD en tiempo real
- Muestra pantallas de victoria/derrota
- Transiciones entre niveles

---

## 🚀 Mejoras Implementadas (v1.1.0)

✅ **Limpieza de Código**
- Eliminados 41 enemigos hardcodeados
- Código estructurado en clases
- Uso de patrones MVC

✅ **Sistema de Niveles**
- 5 niveles con dificultad progresiva
- Enemigos escalados dinámicamente
- Transiciones suaves entre niveles

✅ **Sistema de Vidas**
- Display visual en HUD
- Vidas perdidas al colisionar
- Game Over cuando llegan a 0

✅ **Interfaces Mejoradas**
- Pantalla de inicio profesional
- HUD completo (Nivel, Vidas, Score, Kills)
- Pantallas de victoria/derrota tematizadas

✅ **Eliminación de Errores**
- ✓ `stop()` duplicado
- ✓ Variables `ctx` sin `this.`
- ✓ `Array.splice()` con parámetros incorrectos
- ✓ Referencias a propiedades inexistentes
- ✓ Lógica de limpieza de lasers rota

---

## 📋 Requisitos Técnicos

- **Navegador moderno** con soporte para HTML5 Canvas
- **Resolución mínima**: 1760x975px
- **JavaScript**: ES6+
- **Sin dependencias externas** (excepto SweetAlert para diálogos)

---

## 🎨 Recursos Utilizados

### Herramientas de Desarrollo
- **Editor**: Visual Studio Code
- **Control de versiones**: Git & GitHub
- **Sistema Operativo**: Linux Mint
- **Diseño gráfico**: GIMP

### Librerías
- **SweetAlert**: Diálogos interactivos
- **HTML5 Canvas**: Renderización de gráficos

### Imágenes
Sprites Star Wars incluidos en la carpeta `/img/RogueSquadron/`

---

## 🎮 Cómo Jugar

1. **Abre el juego**: https://bega-pixel.github.io/Game/
2. **Presiona ESPACIO** para comenzar
3. **Esquiva enemigos** usando A/D o Flechas
4. **Dispara** con ESPACIO para destruir naves
5. **Completa 5 niveles** para obtener la victoria
6. **¡Que la Fuerza te acompañe!** 🌟

---

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~2,500+
- **Archivos JavaScript**: 10
- **Clases principales**: 8
- **Métodos documentados**: 50+
- **Niveles**: 5
- **Enemigos totales**: 250+
- **Versión actual**: 1.1.0

---

## 🔄 Versionado

### v1.1.0 (Actual) - Profesional Upgrade
- ✅ Sistema completo de niveles
- ✅ Sistema de vidas
- ✅ Dificultad progresiva
- ✅ Pantallas finales
- ✅ Código refactorizado
- ✅ Documentación completa

### v1.0.0 (Original)
- Juego base con un nivel
- Mecánica de disparo funcional
- Colisiones básicas

---

## 🐛 Bugs Conocidos

Ninguno en la versión actual. Reporta problemas en [Issues](https://github.com/Bega-pixel/Game/issues).

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agrega mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

---

## 👤 Autor

**Bega-pixel** (Juan Berrondo)
- GitHub: [@Bega-pixel](https://github.com/Bega-pixel)
- Proyecto creado como primer proyecto del Bootcamp

---

## 🎬 Créditos

### Inspiración
- Star Wars: Episode V - "The Empire Strikes Back"
- Space Invaders (mecánica clásica de juegos)
- Shooter clásicos

### Tecnologías
- HTML5 Canvas API
- JavaScript ES6+
- GitHub Pages (hosting)

### Agradecimientos
- A la saga Star Wars por la inspiración infinita
- A la comunidad de desarrollo web
- A George Lucas y Lucasfilm

---

## 🌟 ¿Te gustó el proyecto?

⭐ Dale una estrella en GitHub si te gustó este proyecto

---

## 📞 Contacto & Soporte

- 🐛 Reporta bugs: [Issues](https://github.com/Bega-pixel/Game/issues)
- 💡 Sugerencias: Crea un [Discussion](https://github.com/Bega-pixel/Game/discussions)
- 📧 Email: bega2000@protonmail.com

---

**¡Que disfrutes el juego! May the Force be with you! 🚀⭐**

```
╔═══════════════════════════════════════════╗
║  STAR WARS - THE ROGUE X-WING             ║
║  Episode V.1.0 - The Escape of Hoth       ║
║  © 2026 Bega-pixel - All Rights Reserved  ║
╚═══════════════════════════════════════════╝
```
