# Admin Personas - Macarenia Corp

## Información básica

Este proyecto esta hecho con ReactJS + TypeScript, TailwindCSS y se uso Vite para su compilación,
en la parte del backend se utilizo PHP puro con la estructura MVC, Composer para instalar y gestionar las dependencias,
como base de datos se utilizo MySQL con MariaDB, en si esto vino en un paquete de gestión de bases de datos llamado XAMPP, se recomienda su previa instalación,
este es un sistema básico de búsqueda de documentos para evaluar los conocimientos del postulante.

### Instalar dependencias - Frontend

Para instalar las dependencias del frontend, teniendo en cuenta que se uso Vite con Yarn, hacer uso de los siguientes comandos:

#### Acceder a la carpeta donde esta alojado el frontend

> cd ./admin_personas_front

#### Ejecutar el comando para instalar las dependencias de Vite con Yarn

> yarn install

#### Ejecutar el Frontend

Para ejecutar el frontend y que quede ejecutándose en local basta con tan solo escribir el siguiente comando y ejecutarlo:

> yarn dev

### Instalar dependencias - Backend

Para instalar las dependencias del Backend, teniendo en cuenta que se uso PHP con Composer, hacer uso de los siguientes comandos:

#### Acceder a la carpeta donde esta alojado el Backend

> cd ./admin_personas_back

#### Ejecutar el comando para instalar las dependencias de Composer

> composer install

#### Ejecutar el Backend

Para ejecutar el backend y que quede ejecutándose en local basta con tan solo escribir el siguiente comando y ejecutarlo:

> php -S localhost:4000

### Conmfigurar Variables de entorno

Para configurar las variables de entorno buscar en las carpetas admin_personas_back/config/.env.template y admin_personas_back/.env.template,
alli se debe cambiar el nombre del archivo de .env.template a .env, luego abrirlos y seguir los pasos o las recomendaciones que alli aparecen,
con esto configurado el sistema ya deberia funcionar correctamente.