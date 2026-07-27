# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Uso de Herramientas de Inteligencia Artificial (IA)

**Herramienta utilizada:** Gemini 

### Aportes específicos en el desarrollo de `ComMascotas.jsx`

1. Colaboró en la configuración de la llamada a la API para obtener los comentarios y filtrar aquellos correspondientes a la mascota seleccionada mediante `mascotaId`.

2. Ayudó a identificar que la API devolvía un arreglo en `response.data`, corrigiendo un error provocado por intentar acceder a `response.data.value`.

### Aportes específicos en el desarrollo de `EditarMascota.jsx`

1. Colaboró en la estructuración de la petición `PATCH` para actualizar parcialmente los datos de una mascota (descripción, estado e imagen).

2. Ayudó a organizar el flujo de `props` (`mascota`, `onUpdate` y `onCancelar`) para comunicar el componente con `MascotasDetalle.jsx` y gestionar el modo de edición.