# Weather App - Prueba Técnica

## Descripción del Proyecto

Esta aplicación de clima fue desarrollada como prueba técnica para demostrar habilidades en desarrollo móvil con React Native y Expo. La app permite buscar el clima actual de cualquier ciudad del mundo, mostrando detalles como temperatura, humedad y velocidad del viento, además de guardar un historial de búsquedas recientes.

## Características Principales

- **Búsqueda por ciudad**: Consulta del clima actual de cualquier ciudad
- **Visualización detallada**: Muestra temperatura, descripción, humedad y velocidad del viento
- **Historial de búsquedas**: Almacenamiento local de consultas anteriores
- **Diseño responsive**: Interfaz adaptable y moderna
- **Manejo de errores**: Gestión de errores de conexión y validaciones
- **Arquitectura modular**: Código organizado y mantenible

## Tecnologías Utilizadas

- **React Native**: Framework para desarrollo móvil multiplataforma
- **Expo**: Plataforma para facilitar el desarrollo de apps con React Native
- **TypeScript**: Para tipado estático y mejor mantenibilidad
- **Expo Router**: Sistema de navegación basado en archivos
- **AsyncStorage**: Para almacenamiento local persistente
- **OpenWeatherMap API**: API para datos meteorológicos
- **React Hooks**: Para gestión de estado y efectos secundarios

## Despliegue y Distribución

La aplicación está disponible a través de:

- **Expo EAS Update**: La aplicación está publicada para actualización vía Expo EAS
  - URL del Dashboard: https://expo.dev/accounts/jpgaviria/projects/weather-app-fresh/updates/722bde80-8035-45ab-b45c-ed28487ca45a

- **Build de Android**: Se ha generado un archivo APK instalable para Android
  - Build ID: f4115d86-1c8f-4ae4-bb48-91b448946b97
  - APK Download: https://expo.dev/accounts/jpgaviria/projects/weather-app-fresh/builds/f4115d86-1c8f-4ae4-bb48-91b448946b97

## Estructura del Proyecto

```
weather-app/
├── app/                    # Carpeta principal de la aplicación (Expo Router)
│   ├── (tabs)/             # Navegación por pestañas
│   │   ├── index.tsx       # Pantalla principal (búsqueda de clima)
│   │   ├── history.tsx     # Pantalla de historial de búsquedas
│   │   └── _layout.tsx     # Configuración de pestañas
│   └── _layout.tsx         # Layout principal de la aplicación
├── src/                    # Código fuente de la aplicación
│   ├── components/         # Componentes reutilizables
│   ├── services/           # Servicios para interacción con APIs y almacenamiento
│   ├── types/              # Definiciones de tipos TypeScript
│   └── utils/              # Utilidades y herramientas auxiliares
├── .env                    # Variables de entorno (API keys, etc.)
└── babel.config.js         # Configuración de Babel
```

## Instalación y Configuración

1. **Clonar el repositorio**:
   ```
   git clone https://github.com/tu-usuario/weather-app.git
   cd weather-app
   ```

2. **Instalar dependencias**:
   ```
   npm install
   ```

3. **Configurar variables de entorno**:
   - Crea un archivo `.env` en la raíz del proyecto
   - Añade tu API key de OpenWeather:
   ```
   OPENWEATHER_API_KEY=tu_api_key_aqui
   ```

4. **Ejecutar la aplicación**:
   ```
   npx expo start
   ```

5. **Para generar un build (opcional)**:
   ```
   eas build --platform android --profile preview
   ```

6. **Para desplegar en Render.com (versión web)**:
   - Instala dependencias necesarias:
   ```
   npm install --legacy-peer-deps @expo/webpack-config serve
   ```
   - Añade estos scripts a tu package.json:
   ```json
   "scripts": {
     "build:web": "expo export:web",
     "start:web": "serve web-build -p 3000"
   }
   ```
   - Configura Render.com con estos parámetros:
     - Build Command: `npm install && npx expo export:web`
     - Start Command: `npx serve web-build -p $PORT`

## Desafíos Encontrados

Durante el desarrollo enfrenté varios desafíos técnicos:

1. **Entorno de desarrollo limitado**: Gran parte del desarrollo se realizó en un equipo de café internet con recursos limitados y conexión intermitente, lo que causó problemas con la instalación de dependencias y ralentizó el proceso de desarrollo.

2. **Conflictos de dependencias**: Surgieron conflictos entre versiones de `@types/react` y componentes de Expo Router que requirieron reconstruir partes del proyecto varias veces.

3. **Configuración de variables de entorno**: La implementación segura de variables de entorno en React Native/Expo presentó dificultades debido a las peculiaridades de la plataforma.

## Aspectos Destacados de la Implementación

### Arquitectura de la Aplicación

Implementé una arquitectura modular con separación clara de responsabilidades:

- **Componentes**: UI reutilizable y encapsulada
- **Servicios**: Abstracción para API y almacenamiento
- **Hooks personalizados**: Para lógica de negocio reutilizable
- **Sistema de tipos**: Para garantizar la integridad de datos

### Manejo de Estado Global

Para mantener el estado sincronizado entre las pantallas de la aplicación, implementé un patrón tipo singleton en el hook `useWeather` que permite compartir datos del clima y del historial de manera consistente.

### Gestión de Errores Robusta

La aplicación maneja diferentes tipos de errores:
- Errores de red
- Ciudad no encontrada
- Campos vacíos
- Problemas con la API

Cada error se presenta al usuario de manera clara con opciones para recuperarse.

## Mejoras Futuras

En próximas iteraciones, me gustaría implementar:

1. **Pronóstico extendido**: Mostrar clima para los próximos días
2. **Geolocalización**: Detectar automáticamente la ubicación del usuario
3. **Tema oscuro**: Soporte para modo claro/oscuro
4. **Métricas adicionales**: Más datos meteorológicos como presión y visibilidad
5. **Optimizaciones de rendimiento**: Implementar memoización y lazy loading
6. **Tests unitarios y de integración**: Para garantizar la calidad del código
7. **Mejoras de UI con Tailwind CSS**: Para una interfaz más refinada

## Autor

Juan Pablo Gaviria - Desarrollador de Software

## Conclusión

Este proyecto demuestra mi capacidad para desarrollar aplicaciones móviles modernas con arquitecturas limpias y escalables. A pesar de las limitaciones técnicas y del entorno, logré crear una aplicación funcional, elegante y con una experiencia de usuario intuitiva que cumple con todos los requisitos solicitados.

También logré implementar un sistema de despliegue completo utilizando las herramientas de Expo EAS, demostrando conocimientos no solo de desarrollo sino también de DevOps y distribución de aplicaciones móviles.
