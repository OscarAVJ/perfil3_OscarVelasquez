# Perfil 3 - Aplicación móvil

## Estudiante

- **Nombre:** Oscar Abel Velásquez Joyar
- **Carnet:** 20230404
- **Grupo y sección:** 2A

## Enlaces de entrega

- **Video demostrativo público:** Pendiente de agregar
- **Descarga del APK:** Pendiente de agregar

## Funcionalidades

- Pantalla inicial con la información del estudiante.
- Navegación entre pantallas mediante React Navigation y un Native Stack configurado con la API estática.
- Consumo de `https://api.tvmaze.com/shows` con `fetch` y `async/await`.
- Catálogo virtualizado con `FlatList`.
- Tarjeta reutilizable que recibe título, imagen y descripción mediante props.
- Estados de carga, error, lista vacía y actualización por gesto pull-to-refresh.
- Icono y splash personalizados con identidad visual azul.

## Arquitectura

```text
src/
├── components/  # AppBar, tarjeta, loading y estados visuales
├── hooks/       # Estado, efectos y lógica de cada pantalla
├── router/      # Native Stack estático de React Navigation
├── screens/     # Pantallas declarativas sin consumo directo de API
├── services/    # Peticiones y normalización de datos de TVMaze
└── theme/       # Paleta de colores compartida
```

La separación evita acoplar la interfaz con el acceso a datos: el servicio obtiene y normaliza la respuesta, `useShows` administra el ciclo de vida de la petición y la pantalla solo representa cada estado.

## Requisitos

- Node.js 20.19 o superior
- npm
- Expo Go en un dispositivo o un emulador Android

## Instalación y ejecución

```bash
npm install
npx expo start
```

Después, escanea el código QR con Expo Go o presiona `a` para abrir el emulador Android.

## Generar el APK

Inicia sesión en EAS, vincula el proyecto la primera vez y genera una compilación instalable para Android. El perfil `preview` de `eas.json` ya está configurado para producir un APK:

```bash
npx eas-cli@latest login
npx eas-cli@latest init
npx eas-cli@latest build --platform android --profile preview
```

Al finalizar, descarga el APK desde el enlace proporcionado por EAS y agrégalo en la sección **Enlaces de entrega**.

## Evidencias sugeridas para el video

1. Mostrar el icono y el splash personalizados.
2. Abrir la pantalla con los datos del estudiante.
3. Navegar al catálogo y esperar la carga de TVMaze.
4. Desplazarse por las tarjetas y realizar pull-to-refresh.
5. Regresar a la pantalla inicial.
6. Instalar y abrir el APK en un emulador o dispositivo Android.
