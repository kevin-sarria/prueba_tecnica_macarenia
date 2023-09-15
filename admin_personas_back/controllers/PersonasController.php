<?php


namespace Controllers;

use Model\Personas;

class PersonasController {

    public static function listar() {

        $personas = new Personas;
        $personas = $personas::all();
        echo json_encode($personas);

    }

    public static function crear() {

        $personas = new Personas;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $personas->sincronizar($_POST);

            $alertas = $personas->validarPersona();

            if( empty($alertas) ) {

                $registered_document = Personas::where('document_number', $personas->document_number );

                if( $registered_document ) {
                    Personas::setAlerta('error', 'El usuario ya esta registrado');
                    $alertas = Personas::getAlertas();
                    echo json_encode($alertas);
                    return;
                } else {
                    $response = $personas->guardar();
                    $response = Personas::find($response['id']);
                    http_response_code(200);
                    echo json_encode([ "data" => $response, "msg" => 'Registrado Correctamente', "type" => 'success' ]);
                }
            }

            
        }

    }

    public static function editar() {

        $personas = new Personas;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $personas->sincronizar($_POST);

            $alertas = $personas->validarPersona();

            if( empty($alertas) && $personas->id ) {

                $user_exist = $personas->find($personas->id);
                

                if( !$user_exist ) {
                    Personas::setAlerta('error', 'El usuario no esta registrado');
                    $alertas = Personas::getAlertas();
                    echo json_encode($alertas);
                    return;
                } else {

                    $registered_document = Personas::where('document_number', $personas->document_number );

                    if( $registered_document ) {
                        Personas::setAlerta('error', 'Ya existe un usuario con este documento');
                        $alertas = Personas::getAlertas();
                        echo json_encode($alertas);
                        return;
                    }

                    $personas->guardar();
                    $response = Personas::find($personas->id);
                    http_response_code(200);
                    echo json_encode([ "data" => $response, "msg" => 'Actualizado Correctamente', "type" => 'success' ]);
                }
            }

            
        }

    }

    public static function eliminar() {

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

        if( !$_POST['id'] ) {
            Personas::setAlerta('error', 'Error en la peticion');
            $alertas = Personas::getAlertas();
            echo json_encode($alertas);
            return;
        }

        $user_exist = Personas::find(intval($_POST['id']));

        if( !$user_exist ) {
            Personas::setAlerta('error', 'El usuario no esta registrado');
            $alertas = Personas::getAlertas();
            echo json_encode($alertas);
            return;
        } else {
            $user_exist->eliminar();
            http_response_code(200);
            echo json_encode([ "msg" => 'Eliminado Correctamente', "type" => 'success' ]);
        }
            
        }

    }

    public static function filtrarPersonaDocumento() {

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

        $document_number = $_POST['document_number'];

        if( !$document_number ) {
            Personas::setAlerta('error', 'Error en la peticion');
            $alertas = Personas::getAlertas();
            echo json_encode($alertas);
            return;
        }

        $user_exist = Personas::where('document_number', $document_number );

        if( !$user_exist ) {
            http_response_code(400);
            echo json_encode([ "msg" => 'No se han encontrado resultados con este numero de documento', "type" => 'info' ]);
            return;
        } else {
            http_response_code(200);
            echo json_encode([ "data" => $user_exist, "msg" => 'Se han encontrado coincidencias', "type" => 'success' ]);
        }
            
        }

    }

}
