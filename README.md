# ⚛️ React + TypeScript + Vite - Frontend Application

<div align="center">
  <img src="https://imgs.search.brave.com/S6KWiupJjE2CYGI1h8GJcx3G4oDpxaOXPs5E7kCxuPI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9uaW5vLWVzdGEt/ZXNjcmliaWVuZG8t/Y3VhZGVybm8tZXNj/cmliaWVuZG8tYm9s/aWdyYWZvXzMwMDkz/Mi00OTc5LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA" alt="Denis Davila" width="150" height="150" style="border-radius: 50%;">
  
  ### Denis Yampol Davila Huamán
  **Full Stack Developer | Frontend**
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/denis-yampol-davila-huaman/)
  [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:denis.dh.web@gmail.com)
  [![Phone](https://img.shields.io/badge/Phone-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](tel:+519******1)
</div>

---

Aplicación frontend moderna construida con **React 18**, **TypeScript**, **Vite** y las últimas tecnologías del ecosistema React. Este proyecto implementa las mejores prácticas de desarrollo, arquitectura escalable y optimización de rendimiento.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración](#configuración)
- [Desarrollo](#desarrollo)
- [Producción](#producción)
- [Testing](#testing)
- [Sobre el Desarrollador](#sobre-el-desarrollador)
- [Contratación](#contratación)

## ✨ Características

- ⚡ **Vite** - Build tool ultrarrápido con HMR instantáneo
- 🔷 **TypeScript** - Tipado estático para código más robusto
- ⚛️ **React 18** - Última versión con Concurrent Features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔄 **React Query** - Gestión de estado del servidor
- 🗂️ **Zustand** - State management ligero y eficiente
- 🛣️ **React Router v6** - Navegación con últimas características
- ✅ **Zod** - Validación de schemas type-safe
- 🎯 **React Hook Form** - Forms performantes con validación
- 🔍 **ESLint + Prettier** - Linting y formateo de código
- 📱 **Mobile-First Design** - Diseño responsive optimizado
- 🚀 **Optimización de Rendimiento** - Lazy loading, code splitting
- 🔒 **TypeScript Strict Mode** - Máxima seguridad de tipos

## 🛠️ Stack Tecnológico

### Core
```json
{
  "react": "^18.3.1",
  "typescript": "^5.6.2",
  "vite": "^6.0.0"
}
```

### State Management & Data Fetching
- **Zustand** - Estado global ligero
- **React Query (TanStack Query)** - Cache y sincronización de datos
- **React Hook Form** - Gestión de formularios
- **Zod** - Validación de schemas

### Routing & Navigation
- **React Router v6** - Enrutamiento declarativo

### Styling
- **Tailwind CSS** - Framework CSS utility-first
- **CSS Modules** - Estilos con scope local
- **PostCSS** - Procesamiento de CSS

### Tools & Utilities
- **Axios** - Cliente HTTP
- **date-fns** - Manipulación de fechas
- **lucide-react** - Iconos modernos
- **clsx** - Utilidad para classNames condicionales

### Development
- **ESLint** - Linting con reglas TypeScript
- **Prettier** - Formateo de código
- **Vitest** - Testing framework
- **Testing Library** - Testing de componentes React

## 📦 Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** (v18 o superior)
- **npm** o **yarn** o **pnpm**
- **Git**

## 🔧 Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/tu-usuario/tu-proyecto-frontend.git
cd tu-proyecto-frontend
```

2. **Instala las dependencias:**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configura las variables de entorno:**
```bash
cp .env.example .env
```

4. **Edita el archivo `.env`:**
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Mi Aplicación
VITE_ENV=development
```

## 📜 Scripts Disponibles

```bash
# Desarrollo - Inicia el servidor de desarrollo
npm run dev

# Build - Compila para producción
npm run build

# Preview - Previsualiza el build de producción
npm run preview

# Lint - Ejecuta ESLint
npm run lint

# Lint Fix - Corrige errores de linting automáticamente
npm run lint:fix

# Format - Formatea el código con Prettier
npm run format

# Type Check - Verifica tipos de TypeScript
npm run type-check

# Test - Ejecuta los tests
npm run test

# Test UI - Ejecuta tests con interfaz visual
npm run test:ui

# Test Coverage - Genera reporte de cobertura
npm run test:coverage
```

## 📁 Estructura del Proyecto

```
frontend/
├── public/                 # Archivos estáticos
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── api/               # Servicios y llamadas a API
│   │   ├── axios.config.ts
│   │   └── endpoints/
│   ├── assets/            # Imágenes, fuentes, etc.
│   ├── components/        # Componentes reutilizables
│   │   ├── ui/           # Componentes UI básicos
│   │   ├── forms/        # Componentes de formularios
│   │   └── layout/       # Layouts y estructura
│   ├── features/          # Features por módulo
│   │   └── auth/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       └── types/
│   ├── hooks/             # Custom hooks globales
│   ├── layouts/           # Layouts principales
│   ├── pages/             # Páginas/Vistas
│   ├── routes/            # Configuración de rutas
│   ├── store/             # Estado global (Zustand)
│   ├── styles/            # Estilos globales
│   ├── types/             # Tipos TypeScript globales
│   ├── utils/             # Utilidades y helpers
│   │   ├── validators/   # Schemas Zod
│   │   ├── formatters/
│   │   └── constants/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## ⚙️ Configuración

### Vite Configuration

El proyecto usa Vite con las siguientes optimizaciones:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          utils: ['axios', 'date-fns', 'zod']
        }
      }
    }
  }
})
```

### ESLint Configuration

Para aplicaciones de producción, actualiza la configuración ESLint con reglas type-aware:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### Plugins Recomendados

**Para Vite:**
- `@vitejs/plugin-react` - Fast Refresh con Babel
- `@vitejs/plugin-react-swc` - Fast Refresh con SWC (más rápido)

**Para ESLint:**
```bash
npm install -D eslint-plugin-react-x eslint-plugin-react-dom
```

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
  },
])
```

## 🚀 Desarrollo

### Iniciar el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Hot Module Replacement (HMR)

Vite proporciona HMR instantáneo. Los cambios se reflejan inmediatamente sin perder el estado de la aplicación.

### Debugging

Usa las Chrome DevTools para debugging. El proyecto incluye source maps en desarrollo.

## 🏗️ Producción

### Build para producción:
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Preview del build:
```bash
npm run preview
```

### Optimizaciones incluidas:
- ✅ Code splitting automático
- ✅ Tree shaking
- ✅ Minificación de código
- ✅ Compresión de assets
- ✅ Lazy loading de rutas
- ✅ Optimización de imágenes

## 🧪 Testing

El proyecto usa **Vitest** y **Testing Library**:

```bash
# Ejecutar tests
npm run test

# Tests en modo watch
npm run test:watch

# Cobertura de código
npm run test:coverage

# UI de tests
npm run test:ui
```

## 👨‍💻 Sobre el Desarrollador

### Denis Davila - Full Stack Developer

Con más de **2 años de experiencia** liderando proyectos frontend y mejorando el rendimiento web. Especializado en React, TypeScript y arquitecturas escalables.

### 🎯 Experiencia y Logros

- 🏆 **Lead Frontend Architect** con mejoras del 40% en entrega de productos
- ⚡ **25% de mejora** en rendimiento web mediante optimización
- 🔧 **80% de reducción** en tiempos de despliegue con CI/CD
- 🎨 Experto en **React Hooks**, **TypeScript**, **Next.js** y **State Management**
- 📱 Implementación de **diseños mobile-first** y **responsive**
- 🚀 Resolución de problemas de **renderizado** y **re-renders innecesarios**
- 💡 Optimización con **useMemo**, **useCallback** y **React.memo**

### 💼 Stack de Expertise

```javascript
const expertise = {
  frontend: [
    'React', 'TypeScript', 'Next.js', 
    'Vite', 'React Query', 'Zustand'
  ],
  styling: [
    'Tailwind CSS', 'CSS Modules', 
    'Responsive Design', 'Mobile-First'
  ],
  tools: [
    'Git', 'GitHub', 'Chrome DevTools',
    'ESLint', 'Prettier', 'Vitest'
  ],
  practices: [
    'Clean Code', 'SOLID Principles',
    'Component Patterns', 'Performance Optimization'
  ]
};
```

### 🎓 Formación

- 📚 **React y TypeScript - La Guía Completa** (Udemy, 60% completado)
  - Hooks avanzados, Context API, Zustand, React Query
  - MERN/PERN Stack, Next.js, SSR
  - Validación type-safe con Zod
- 🎓 **Profesional Técnico en Desarrollo de Sistemas** (ISA Santa Angela)
- 🌐 **Autodidacta continuo** - Siempre aprendiendo nuevas tecnologías

## 💼 Contratación

### ¡Disponible para proyectos Frontend!

Estoy abierto a oportunidades **freelance, remoto o tiempo completo**. Puedo ayudarte con:

### 🎨 Servicios Frontend

- ⚛️ **Desarrollo de aplicaciones React** modernas y escalables
- 🎯 **TypeScript** - Código type-safe y mantenible
- 📱 **Interfaces responsive** con Tailwind CSS
- ⚡ **Optimización de rendimiento** - Reducción de re-renders y lag
- 🔄 **State Management** - Zustand, Redux, Context API
- 🌐 **Next.js** - SSR, SSG, ISR para SEO y performance
- 🎨 **UI/UX Implementation** - Diseños pixel-perfect
- 🔌 **Integración de APIs** - REST, GraphQL
- 🧪 **Testing** - Unit tests, integration tests
- 🚀 **CI/CD** - Despliegue automatizado

### 🌟 ¿Por qué elegirme?

✅ **Experiencia liderando equipos** como Lead Frontend Architect  
✅ **Resultados comprobables** - 40% mejora en entregas, 25% en rendimiento  
✅ **Código limpio** y bien documentado  
✅ **Resolución de problemas complejos** de renderizado y performance  
✅ **Metodologías ágiles** - Scrum/Kanban  
✅ **Comunicación efectiva** - 95% satisfacción del cliente  
✅ **Pasión por la tecnología** y mejora continua  

### 💡 Especialidades Frontend

- Optimización de componentes React con **useMemo** y **useCallback**
- Solución de problemas de **props drilling** con Context API
- Implementación de **arquitecturas escalables**
- **Debugging** avanzado con Chrome DevTools
- Performance profiling y optimización
- Component patterns y design systems

### 📬 Contacto

<div align="center">

| Canal | Información |
|-------|-------------|
| 📧 **Email** | [denis.dh.web@gmail.com](mailto:denis.dh.web@gmail.com) |
| 💼 **LinkedIn** | [linkedin.com/in/davila](https://www.linkedin.com/in/denis-yampol-davila-huaman/) |
| 📱 **WhatsApp** | [+51 928 570 081](https://wa.me/519******1) |
| 📍 **Ubicación** | Piura, Perú 🇵🇪 (Remoto disponible) |

</div>

**💬 ¿Tienes un proyecto frontend en mente?**  
Conversemos sobre cómo puedo ayudarte a crear una experiencia de usuario excepcional.

**🤝 ¿Necesitas un desarrollador React/TypeScript?**  
Contáctame y hablemos sobre cómo mi experiencia puede beneficiar a tu equipo.

---

<div align="center">

### 💻 Tecnologías Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge)

⭐ **Si este proyecto te resulta útil, déjame una estrella!**

📫 **¿Interesado en colaborar?** Envíame un mensaje para discutir tu proyecto.

</div>

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <sub>Desarrollado con ❤️ y ⚛️ por Denis Davila | Piura, Perú 🇵🇪</sub>
</div>
