# 🌱 Recycling Memory Game

Un juego de memoria interactivo enfocado en la educación ambiental y el reciclaje, construido con Astro, React y Tailwind CSS.

## 🎮 Descripción del Juego

El **Recycling Memory Game** es un juego educativo de memoria donde los jugadores deben emparejar conceptos de reciclaje con sus ejemplos correspondientes. El objetivo es aprender sobre diferentes tipos de materiales reciclables mientras se divierte jugando.

### Características del Juego

- **8 pares de cartas** con conceptos y ejemplos de reciclaje
- **Sistema de puntuación** que cuenta los movimientos realizados
- **Interfaz intuitiva** con animaciones suaves y efectos visuales
- **Diseño responsivo** que funciona en dispositivos móviles y desktop
- **Tema ambiental** con colores verdes y azules inspirados en la naturaleza

## 🎯 Cómo Jugar

1. **Objetivo**: Encuentra todos los 8 pares de cartas relacionadas con reciclaje
2. **Mecánica**: Haz clic en las cartas para voltearlas y revelar su contenido
3. **Emparejamiento**: Busca pares que coincidan (concepto + ejemplo)
4. **Puntuación**: Intenta completar el juego en la menor cantidad de movimientos posibles
5. **Victoria**: ¡Encuentra todos los pares para ganar!

### Pares de Cartas Disponibles

| Concepto | Ejemplo |
|----------|---------|
| 🍃 **Organic Waste** | 🍎 Apple Core |
| ♻️ **Recyclable Materials** | 🥤 Plastic Bottle |
| 🗑️ **Non-Recyclable** | 🧻 Dirty Tissues |
| 🔋 **Hazardous Waste** | 🔋 Used Battery |
| 🍷 **Glass Reuse** | 🫙 Glass Jar |
| 👕 **Fabric Reuse** | 👕 Old T-Shirt |
| 🔧 **Upcycling** | 🪑 Pallet Furniture |
| 📦 **Paper Recycling** | 📦 Cardboard Box |

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clona el repositorio**
```bash
git clone [url-del-repositorio]
cd recycling-memory-game
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
```
http://localhost:4321
```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run astro` - Ejecuta comandos de Astro CLI

## 🛠️ Tecnologías Utilizadas

### Framework y Bibliotecas

- **[Astro](https://astro.build/)** - Framework web moderno para sitios estáticos
- **[React](https://react.dev/)** - Biblioteca para interfaces de usuario
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **[Lucide React](https://lucide.dev/)** - Iconos SVG para React

### Herramientas de Desarrollo

- **TypeScript** - Tipado estático para JavaScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Plugin para compatibilidad de CSS

## 📁 Estructura del Proyecto

```
recycle/
├── src/
│   ├── components/
│   │   └── RecyclingMemoryGame.jsx    # Componente principal del juego
│   ├── layouts/
│   │   └── Layout.astro               # Layout base de la aplicación
│   └── pages/
│       └── index.astro                # Página principal
├── public/                            # Archivos estáticos
├── astro.config.mjs                   # Configuración de Astro
├── tailwind.config.mjs                # Configuración de Tailwind
├── tsconfig.json                      # Configuración de TypeScript
├── postcss.config.js                  # Configuración de PostCSS
└── package.json                       # Dependencias y scripts
```

## 🎨 Características Técnicas

### Funcionalidades del Juego

- **Estado del juego** manejado con React hooks (`useState`, `useEffect`)
- **Algoritmo de emparejamiento** que verifica coincidencias entre cartas
- **Sistema de shuffling** para mezclar cartas al inicio de cada partida
- **Animaciones CSS** con Tailwind para efectos de hover y transiciones
- **Modal de victoria** con estadísticas del juego

### Diseño Responsivo

- **Grid adaptativo** que se ajusta a diferentes tamaños de pantalla
- **Diseño mobile-first** optimizado para dispositivos táctiles
- **Colores temáticos** que reflejan el tema ambiental
- **Tipografía clara** y accesible

## 🌍 Impacto Educativo

Este juego tiene como objetivo:

- **Educar** sobre diferentes tipos de materiales y su clasificación
- **Concientizar** sobre la importancia del reciclaje y reutilización
- **Enseñar** conceptos como upcycling y manejo de residuos peligrosos
- **Promover** hábitos ambientales responsables

## 🔧 Personalización

### Agregar Nuevos Pares de Cartas

Para agregar nuevos pares de cartas, modifica el array `cardPairs` en `RecyclingMemoryGame.jsx`:

```javascript
const cardPairs = [
  // Nuevo par
  { 
    id: 9, 
    type: 'nuevo-tipo', 
    icon: IconComponent, 
    text: 'Nuevo Concepto', 
    color: 'bg-yellow-500', 
    pairType: 'concept' 
  },
  { 
    id: 9, 
    type: 'nuevo-tipo', 
    icon: '🆕', 
    text: 'Ejemplo Nuevo', 
    color: 'bg-yellow-400', 
    pairType: 'example' 
  },
  // ... resto de pares
];
```

### Modificar Estilos

Los estilos están implementados con Tailwind CSS. Puedes personalizar:

- **Colores**: Modifica las clases `bg-color-xxx`
- **Animaciones**: Ajusta las clases `transition-xxx` y `transform`
- **Layout**: Cambia las clases de grid y spacing

## 📋 Roadmap de Características Futuras

- [ ] **Sistema de niveles** con diferentes dificultades
- [ ] **Temporizador** para agregar presión temporal
- [ ] **Leaderboard** local para guardar mejores puntuaciones
- [ ] **Modo multijugador** para competir con amigos
- [ ] **Más categorías** de reciclaje (electrónicos, textiles, etc.)
- [ ] **Efectos de sonido** para mejorar la experiencia
- [ ] **Modo tutorial** interactivo para nuevos jugadores

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con 💚 para promover la educación ambiental y el reciclaje.

---

**¿Te gustó el juego?** ¡Dale una ⭐ al repositorio y ayúdanos a difundir la conciencia ambiental!

## 🆘 Soporte y FAQ

### Problemas Comunes

**Q: El juego no carga correctamente**
A: Asegúrate de tener Node.js 18+ instalado y ejecuta `npm install` antes de `npm run dev`

**Q: Los estilos no se aplican**
A: Verifica que Tailwind CSS esté correctamente configurado en `tailwind.config.mjs`

**Q: Error de compilación TypeScript**
A: Revisa que todas las dependencias estén instaladas correctamente

Para más ayuda, abre un issue en el repositorio del proyecto.