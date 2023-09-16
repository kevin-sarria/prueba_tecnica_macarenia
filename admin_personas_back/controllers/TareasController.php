<?php


namespace Controllers;

use Model\Personas;
use Model\Tareas;

class TareasController {

    public static function listar() {

        $tareas = new Tareas;
        $tareas = $tareas::all();
        echo json_encode($tareas);

    }

    public static function crear() {

        $tareas = new Tareas;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $tareas->sincronizar($_POST);

            $alertas = $tareas->validarTarea();

            if( empty($alertas) ) {
                
                $user_exist = Personas::find($tareas->id_person);

                if( $user_exist ) {
                    $response = $tareas->guardar();
                    $response = Tareas::find($response['id']);
                    http_response_code(200);
                    echo json_encode([ "data" => $response, "msg" => 'Registrado Correctamente', "type" => 'success' ]);
                } else {
                    Tareas::setAlerta('error', 'Usuario no encontrado');
                    $alertas = Tareas::getAlertas();
                    http_response_code(400);
                    echo json_encode($alertas);
                    return;
                }

            }

            
        }

    }

    public static function editar() {

        $tareas = new Tareas;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $tareas->sincronizar($_POST);

            $alertas = $tareas->validarTarea();

            if( empty($alertas) && $tareas->id ) {

                $task_exist = $tareas->find($tareas->id);
                

                if( !$task_exist ) {
                    Tareas::setAlerta('error', 'No se ha encontrado ninguna tarea');
                    $alertas = Tareas::getAlertas();
                    http_response_code(400);
                    echo json_encode($alertas);
                    return;
                } else {

                    $user_exist = Personas::find($tareas->id_person);

                    if($user_exist) {
                        $tareas->guardar();
                        $response = Tareas::find($tareas->id);
                        http_response_code(200);
                        echo json_encode([ "data" => $response, "msg" => 'Actualizado Correctamente', "type" => 'success' ]);
                    } else {
                        Tareas::setAlerta('error', 'Usuario no encontrado');
                        $alertas = Tareas::getAlertas();
                        http_response_code(400);
                        echo json_encode($alertas);
                        return;
                    }

                }
            }

            
        }

    }

    public static function eliminar() {

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

        if( !$_POST['id'] ) {
            Tareas::setAlerta('error', 'Error en la peticion');
            $alertas = Tareas::getAlertas();
            http_response_code(400);
            echo json_encode($alertas);
            return;
        }

        $task_exist = Tareas::find(intval($_POST['id']));

        if( !$task_exist ) {
            Tareas::setAlerta('error', 'Tarea no encontrada');
            $alertas = Tareas::getAlertas();
            http_response_code(400);
            echo json_encode($alertas);
            return;
        } else {
            $task_exist->eliminar();
            http_response_code(200);
            echo json_encode([ "msg" => 'Eliminado Correctamente', "type" => 'success' ]);
        }
            
        }

    }

    public static function filtrarPorFechaLimite() {

        $tareas = new Tareas;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $tareas->sincronizar($_POST);

            $filtered_task = Tareas::where('limit_date', $tareas->limit_date);

            if( !$filtered_task ) {
                Tareas::setAlerta('info', 'No hay tareas para esta fecha');
                $alertas = Tareas::getAlertas();
                http_response_code(400);
                echo json_encode($alertas);
                return;
            }

            http_response_code(200);
            echo json_encode($filtered_task);
            
        }

    }

    public static function filtrarPorRangoFechaLimite() {

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $initial_deadline = $_POST['initial_deadline'];
            $final_deadline = $_POST['final_deadline'];

            $filtered_task = Tareas::whereDoubleDate('limit_date', $initial_deadline, $final_deadline);

            if( !$filtered_task ) {
                Tareas::setAlerta('info', 'No hay tareas para estas fechas');
                $alertas = Tareas::getAlertas();
                http_response_code(400);
                echo json_encode($alertas);
                return;
            }

            http_response_code(200);
            echo json_encode($filtered_task);
            
        }

    }

    public static function filtrarPorPersona() {

        $tareas = new Tareas;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $tareas->sincronizar($_POST);
            $document_number = $_POST['document_number'];
            $id_type_document = $_POST['id_type_document'];

            $task_exist = Tareas::find($tareas->id);

            if( !$task_exist ) {
                Tareas::setAlerta('info', 'Tarea no Encontrada');
                $alertas = Tareas::getAlertas();
                http_response_code(400);
                echo json_encode($alertas);
                return;
            }

            $filtered_task = Tareas::filterTaskForPerson('personas', 'document_number', 'id_type_document', $document_number, $id_type_document);
            

            if( !$filtered_task ) {
                Tareas::setAlerta('info', 'No hay tareas para estas fechas');
                $alertas = Tareas::getAlertas();
                http_response_code(400);
                echo json_encode($alertas);
                return;
            } else if( $task_exist->id_person !== $filtered_task[0]->id_person ) {
                Tareas::setAlerta('info', 'Tarea no Encontrada');
                $alertas = Tareas::getAlertas();
                http_response_code(400);
                echo json_encode($alertas);
                return;
            }

            http_response_code(200);
            echo json_encode($filtered_task);
            
        }

    }

}
