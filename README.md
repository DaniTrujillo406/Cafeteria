# Aplicativo de Gestión de Cafetería

Este proyecto es una aplicación para la gestión de inventarios y ventas en una
cafetería. Permite registrar, editar, eliminar y listar productos, así como
registrar ventas de manera eficiente.

## Tecnologías Utilizadas

- **Frontend**: React.js, Material-UI
- **Backend**: Node.js, Express.js
- **Base de Datos**: PostgreSQL
- **Herramientas adicionales**: Axios, React Router

---

## Funcionalidades

### **Productos**
- Crear productos con los siguientes campos:
  - Nombre
  - Referencia
  - Precio
  - Peso
  - Categoría
  - Stock
- Editar productos existentes.
- Eliminar productos del inventario.
- Listar todos los productos en una tabla interactiva.

### **Ventas**
- Registrar ventas seleccionando un producto disponible y especificando la cantidad.
- Actualizar automáticamente el stock del producto después de la venta.
- Listar todas las ventas realizadas con detalles como fecha, producto y cantidad.

---

## Instalación y Configuración

### **Requisitos previos**
- Node.js (v14 o superior)
- PostgreSQL
- Git

### **Configuración del Backend**

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/cafeteria-app.git
2. Navega al directorio del backend:
    cd backend
3. Instala las dependencias:
    npm install
4. Configura el archivo .env con los datos de tu base de datos PostgreSQL:
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=cafeteriaBD
5. Ejecuta las migraciones para crear las tablas necesarias:
    npm run migrate
6. Inicia el servidor:
    npm start
El backend estará disponible en: http://localhost:8080.


### **Configuración del Frontend**

1. Navega al directorio del frontend:
    cd frontend
2. Instala las dependencias:
    npm install
3. Inicia la aplicación:
    npm start
La aplicación estará disponible en: http://localhost:3000.

----------------------------------------------------------------------------------------------

## **Uso**

Crear Productos

1. Accede a la sección de "Productos".
2. Haz clic en "Crear Producto".
3.Completa el formulario con los datos requeridos.
4. Guarda el producto para añadirlo al inventario.
   
Editar Productos

1. Haz clic en el ícono de edición junto al producto que deseas modificar.
2. Actualiza los datos necesarios en el formulario.
3. Guarda los cambios.

Eliminar Productos
1. Haz clic en el ícono de eliminar junto al producto.

Registrar Ventas
1. Accede a la sección de "Ventas".
2. Selecciona un producto disponible del menú desplegable.
3. Ingresa la cantidad a vender.
4. Guarda la venta para actualizar el inventario.

----------------------------------------------------------------------------------------------

## **Autor**

Este proyecto fue creado por Daniela Alejandra Parra Trujillo.
Puedes contactarme en ingdanielatrujillo@gmail.com o visitar mi perfil de GitHub en https://github.com/DaniTrujillo406.

