# Vision KPI Tool - Dashboard de Análisis de Datos

## Descripción del Proyecto

**Vision KPI Tool** es una aplicación web moderna de análisis de datos que permite visualizar y hacer seguimiento del rendimiento empresarial en tiempo real. Este dashboard interactivo presenta indicadores clave de rendimiento (KPIs) con gráficos dinámicos y filtros personalizables.

### Características Principales

- **Visualización de KPIs en Tiempo Real**: Seguimiento de ventas totales, usuarios activos, ingresos y tasas de crecimiento
- **Gráficos Interactivos**: Análisis de tendencias de ventas y distribución por categorías
- **Filtros Personalizables**: Selección de rangos de fechas y categorías específicas
- **Exportación de Datos**: Descarga de información en formato CSV
- **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos
- **Tema Moderno**: Interfaz elegante con efectos visuales y animaciones suaves

### Tecnologías Utilizadas

- **Vite** - Herramienta de construcción ultrarrápida
- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **shadcn/ui** - Componentes de UI de alta calidad
- **Tailwind CSS** - Framework de CSS utilitario
- **Recharts** - Biblioteca de gráficos para React
- **React Hook Form** - Gestión de formularios eficiente
- **Lucide React** - Iconos modernos

## Información del Proyecto

**URL de Producción**: https://lovable.dev/projects/3ac7fe00-e49e-4243-b5af-8c12a3f63a5c

## Instalación y Configuración

### Requisitos Previos

- Node.js 18 o superior
- npm o yarn como gestor de paquetes

### Instalación Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

```sh
# Paso 1: Clonar el repositorio
git clone <TU_URL_GIT>

# Paso 2: Navegar al directorio del proyecto
cd vision-kpi-tool

# Paso 3: Instalar las dependencias
npm install

# Paso 4: Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con recarga automática
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción localmente
- `npm run lint` - Ejecuta el linter para verificar la calidad del código

## Cómo Editar el Código

Existen varias formas de editar esta aplicación:

### Opción 1: Usar Lovable

Visita el [Proyecto en Lovable](https://lovable.dev/projects/3ac7fe00-e49e-4243-b5af-8c12a3f63a5c) y comienza a hacer cambios mediante prompts.

Los cambios realizados en Lovable se confirmarán automáticamente en este repositorio.

### Opción 2: Usar tu IDE Preferido

Clona este repositorio y trabaja localmente. Los cambios que hagas se reflejarán en Lovable.

### Opción 3: Editar Directamente en GitHub

- Navega al archivo deseado
- Haz clic en el botón "Edit" (ícono de lápiz) en la parte superior derecha
- Realiza tus cambios y confírmalos

### Opción 4: Usar GitHub Codespaces

- Ve a la página principal del repositorio
- Haz clic en el botón "Code" (verde) cerca de la esquina superior derecha
- Selecciona la pestaña "Codespaces"
- Haz clic en "New codespace" para iniciar un entorno Codespace
- Edita los archivos directamente y confirma los cambios

## Despliegue

### Despliegue con Lovable

Simplemente abre [Lovable](https://lovable.dev/projects/3ac7fe00-e49e-4243-b5af-8c12a3f63a5c) y haz clic en Share → Publish.

### Despliegue en Netlify

Este proyecto está configurado para desplegarse en Netlify:

1. Conecta tu repositorio con Netlify
2. Configura los siguientes ajustes:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Netlify detectará automáticamente la configuración de Vite

## Dominio Personalizado

Puedes conectar un dominio personalizado a tu proyecto Lovable:

- Navega a Project > Settings > Domains y haz clic en Connect Domain
- Lee más aquí: [Configuración de dominio personalizado](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Estructura del Proyecto

```
vision-kpi-tool/
├── src/
│   ├── components/        # Componentes React reutilizables
│   │   ├── ui/           # Componentes de shadcn/ui
│   │   ├── KPICard.tsx   # Tarjetas de indicadores KPI
│   │   ├── SalesChart.tsx # Gráfico de ventas
│   │   └── CategoryChart.tsx # Gráfico de categorías
│   ├── pages/            # Páginas de la aplicación
│   ├── lib/              # Utilidades y datos de prueba
│   ├── hooks/            # React hooks personalizados
│   └── main.tsx          # Punto de entrada de la aplicación
├── public/               # Archivos estáticos
└── netlify/             # Configuración de Netlify
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/nueva-funcion`)
3. Confirma tus cambios (`git commit -m 'Añadir nueva función'`)
4. Sube los cambios a tu rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

## Licencia

Este proyecto está desarrollado con [Lovable](https://lovable.dev) y está disponible para uso personal y comercial.

## Soporte

Para obtener ayuda con Lovable, visita:
- [Documentación de Lovable](https://docs.lovable.dev)
- [Comunidad de Lovable](https://lovable.dev/community)

---

**Desarrollado con ❤️ usando Lovable**
