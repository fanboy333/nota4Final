# Mascotas Frontend 🐾

Este es el proyecto frontend para la gestión de mascotas, desarrollado en **React** con **Vite**. Permite registrar nuevas mascotas, listar las existentes, ver detalles de forma individual, editar información (descripción, estado, imagen) y visualizar comentarios asociados.

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
* **Node.js** (versión 18 o superior recomendada).
* **npm** (viene instalado automáticamente con Node.js).

---

## 🚀 Instalación y Configuración

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone <URL-del-repositorio>
   cd Mascotas-front2026
   ```

2. **Instalar las dependencias:**
   Ejecuta el siguiente comando para descargar e instalar todas las librerías necesarias (como React, Axios, Bootstrap, React Router Dom, etc.):
   ```bash
   npm install
   ```

---

## 💻 Ejecución del Proyecto

Para iniciar el servidor de desarrollo local:

1. **Ejecutar el servidor local:**
   ```bash
   npm run dev
   ```

2. **Acceder a la aplicación:**
   Una vez iniciado, abre tu navegador web y entra a:
   [http://localhost:5173](http://localhost:5173)

---

## 🤖 Uso de Herramientas de Inteligencia Artificial (IA)

**Herramienta utilizada:** Gemini 

### Aportes específicos en el desarrollo de `ComMascotas.jsx`

1. Colaboró en la configuración de la llamada a la API para obtener los comentarios y filtrar aquellos correspondientes a la mascota seleccionada mediante `mascotaId`.
2. Ayudó a identificar que la API devolvía un arreglo en `response.data`, corrigiendo un error provocado por intentar acceder a `response.data.value`.

### Aportes específicos en el desarrollo de `EditarMascota.jsx`

1. Colaboró en la estructuración de la petición `PATCH` para actualizar parcialmente los datos de una mascota (descripción, estado e imagen).
2. Ayudó a organizar el flujo de `props` (`mascota`, `onUpdate` y `onCancelar`) para comunicar el componente con `MascotasDetalle.jsx` y gestionar el modo de edición.

---

## 🎨 Diseño de Interfaz (Bootstrap Básico)

La interfaz de usuario se mejoró utilizando clases nativas y estándar de Bootstrap para asegurar un diseño limpio y ordenado sin necesidad de añadir reglas CSS personalizadas o avanzadas:

* **Sistema de Rejilla (`container`, `row`, `col`)**: Organiza la pantalla en columnas (por ejemplo, el formulario de registro a la izquierda y la lista de mascotas a la derecha) que se adaptan de forma responsive a pantallas de celulares, tablets y computadoras.
* **Tarjetas de Mascotas (`card`, `card-body`, `card-img-top`)**: Cada mascota se lista dentro de una tarjeta con su respectiva foto alineada a una altura fija uniforme (`object-fit: cover`) para que la lista se mantenga alineada y prolija.
* **Estilos de Formularios**: Los campos de entrada, áreas de texto y menús de selección en los formularios de registro y edición utilizan las clases básicas `.form-control` y `.form-select` de Bootstrap.
* **Componentes Auxiliares**:
  - Barra de navegación básica superior oscura (`navbar navbar-expand navbar-dark bg-dark`).
  - Botones estándar de acción (`btn btn-primary`, `btn-outline-primary`, `btn-warning`).
  - Etiquetas o insignias de estado para identificar si la mascota tiene un estado asignado (`badge bg-info`).
