<?php

require_once "config/app.php";


use MVC\Router;
use Controllers\PersonasController;
use Controllers\TareasController;

$router = new Router();

// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");

// Permitir solicitudes con los métodos GET, POST, PUT y DELETE
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

// Permitir el envío de la cabecera "Authorization" y "Content-Type"
header("Access-Control-Allow-Headers: *");

// Establecer el tipo de contenido de la respuesta como JSON
header("Content-Type: application/json");


// Apartado de personas
$router->get('/listar-personas', [PersonasController::class, 'listar']);
$router->post('/crear-persona', [PersonasController::class, 'crear']);
$router->post('/editar-persona', [PersonasController::class, 'editar']);
$router->post('/eliminar-persona', [PersonasController::class, 'eliminar']);
$router->post('/listar-persona-documento', [PersonasController::class, 'filtrarPersonaDocumento']);

// Apartado de tareas
$router->get('/listar-tareas', [TareasController::class, 'listar']);
$router->post('/crear-tarea', [TareasController::class, 'crear']);
$router->post('/editar-tarea', [TareasController::class, 'editar']);
$router->post('/eliminar-tarea', [TareasController::class, 'eliminar']);
$router->post('/filtrar-fecha-limite', [TareasController::class, 'filtrarPorFechaLimite']);
$router->post('/filtrar-rango-fecha-limite', [TareasController::class, 'filtrarPorRangoFechaLimite']);
$router->post('/filtrar-tarea-persona', [TareasController::class, 'filtrarPorPersona']);


$router->comprobarRutas();


?>