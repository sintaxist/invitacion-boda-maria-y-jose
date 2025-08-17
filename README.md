# 💍 Invitación de Boda - María y José

Este proyecto es una página web de tipo *landing page* para la boda de María y José. Ha sido diseñada y desarrollada con un enfoque en la elegancia, la modernidad y una experiencia de usuario fluida, presentando toda la información del evento de manera clara y atractiva.

El sitio es completamente responsivo, multilingüe (Español e Inglés) y cuenta con animaciones sutiles para crear una experiencia memorable para los invitados.

![Captura de pantalla de la invitación de boda para María y José](./docs/Captura.png)

## 🚀 Demo en Vivo
*(Añade aquí el enlace a tu sitio una vez que lo despliegues)*
**[https://invitacion-boda-maria-y-jose-a21a.vercel.app/es/](https://invitacion-boda-maria-y-jose-a21a.vercel.app/es/)**

---
## ✨ Características Principales
* **Diseño 100% Responsivo:** Adaptado para una visualización perfecta en computadoras, tablets y móviles.
* **Internacionalización (i18n):** Soporte completo para Español e Inglés a través de rutas (`/es`, `/en`), con un selector de idioma dinámico.
* **Animaciones de Entrada:** Las secciones y elementos aparecen suavemente al hacer scroll, gracias al uso de `IntersectionObserver`.
* **Galería de Fotos Interactiva:** Cuadrícula de imágenes con un efecto *lightbox* que permite ver las fotos en grande y navegar entre ellas.
* **Formulario RSVP Interactivo:** Un formulario de confirmación de asistencia con validación en tiempo real y efectos visuales como confeti al confirmar.
* **Componentes Reutilizables:** Una arquitectura modular que permite mantener el código limpio y escalable.

---
## 🛠️ Tecnologías y Librerías
Este proyecto fue construido desde cero con un enfoque *vanilla*, minimizando las dependencias para un rendimiento óptimo.
* **Framework:** [Astro](https://astro.build/)
* **Lenguajes:** HTML, CSS, JavaScript (con TypeScript para el tipado)
* **Estilos:** CSS plano con variables globales (`:root`) para un sistema de diseño consistente.
* **Librerías:**
    * `canvas-confetti`: Para el efecto de celebración en el formulario RSVP.

---
## 🏛️ Arquitectura del Proyecto
La estructura del proyecto se basa en la modularidad y las mejores prácticas de Astro.

#### 1. **Componentes Reutilizables**
El diseño se descompuso en componentes pequeños y reutilizables (ubicados en `src/components/`) como `Button.astro`, `Card.astro`, `Title.astro` y `LangSwitcher.astro`. Esto sigue el principio **DRY (Don't Repeat Yourself)** y hace que el mantenimiento sea mucho más sencillo.

#### 2. **Internacionalización (i18n)**
Se implementó el sistema de rutas de Astro para la internacionalización.
* **Rutas Dinámicas:** Se utiliza una única plantilla (`src/pages/[lang]/index.astro`) que genera estáticamente las páginas para cada idioma (`/es/`, `/en/`).
* **Gestión de Contenido:** Todos los textos de la página están centralizados en archivos `es.json` y `en.json` dentro de `src/locales/`. La página carga el diccionario correcto según la URL y pasa los textos a los componentes a través de `props`.
* **Configuración Central:** El archivo `src/locales/index.ts` actúa como el centro de control, exportando las traducciones, metadatos de los idiomas (nombres, banderas) y el idioma por defecto.

#### 3. **Estilos Globales y Encapsulados**
* **Layout Global:** El archivo `src/layouts/Layout.astro` define la estructura base del HTML y contiene los estilos globales (`<style is:global>`). Aquí se definen las variables de CSS (`:root`) para la paleta de colores y la tipografía, así como las animaciones globales.
* **Estilos Encapsulados:** Cada componente tiene sus propios estilos encapsulados, lo que previene conflictos de CSS entre ellos. Cuando fue necesario, se usaron selectores `:global()` para estilizar componentes hijos.

#### 4. **Interactividad con JavaScript Vanilla**
Toda la interactividad del lado del cliente se maneja con JavaScript puro para mantener el sitio ligero.
* **Animaciones al Scroll:** Un `IntersectionObserver` global (definido en `Layout.astro`) observa las secciones y añade una clase `.animate` para disparar las animaciones de entrada.
* **Lógica de Componentes:** Componentes como `LangSwitcher`, `RsvpForm` y la `Galeria` tienen sus propios scripts autocontenidos para manejar su funcionalidad (abrir/cerrar menús, validación, etc.).

---
## 🤯 Retos y Soluciones
Durante el desarrollo, surgieron varios retos interesantes que se resolvieron con técnicas específicas:
* **Animaciones Secuenciales:** Para lograr que las decoraciones animaran su entrada y *luego* comenzaran a flotar, se utilizó una técnica de **animaciones encadenadas en CSS**. Se definen dos animaciones en una sola regla, usando `animation-delay` en la segunda para que espere a que la primera termine.
* **Estilizado de Componentes Hijos:** Astro encapsula los estilos por defecto, lo que impedía que un componente padre (ej. `Detalles.astro`) estilizara un icono SVG dentro de un componente hijo (ej. `ArrowLlink.astro`). La solución fue usar el selector especial **`:global()`** o pasar una `class` como prop y definirla en el componente hijo.
* **Renderizado Dinámico de Componentes:** Al intentar renderizar componentes de bandera de forma dinámica dentro de un bucle `.map()`, Astro mostraba un error. La solución fue crear un componente "despachador" (`Flag.astro`) que utiliza **renderizado condicional** (`{code === 'es' && <SpainFlag />}`), centralizando la lógica y permitiendo que el `LangSwitcher` sea completamente dinámico.

---
## 💻 Cómo Ejecutar el Proyecto Localmente
1.  Clona este repositorio.
2.  Abre una terminal en la raíz del proyecto.
3.  Instala las dependencias:
    ```bash
    npm install
    ```
4.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
5.  Abre [http://localhost:4321](http://localhost:4321) en tu navegador.